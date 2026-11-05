'use client'

import { upload } from '@vercel/blob/client'
import { useEffect, useRef, useState } from 'react'
import {
  FILE_CONTENT_TYPES,
  type FileFieldId,
  type Question,
  type UploadedFile,
  extensionOf,
  formatBytes,
} from '@/lib/intake/questions'
import styles from './form.module.css'

export interface FileItem {
  key: string
  file: File
  name: string
  size: number
  contentType: string
  status: 'queued' | 'uploading' | 'done' | 'error'
  progress: number
  preview?: string
  result?: UploadedFile
  message?: string
}

const CONCURRENCY = 3
const PREVIEWABLE = new Set(['png', 'jpg', 'jpeg', 'webp', 'svg'])

function safeFileName(name: string, ext: string): string {
  const base = name
    .replace(/\.[^.]+$/, '')
    .normalize('NFKD')
    .replace(/[^A-Za-z0-9_-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80)
  return `${base || 'file'}.${ext}`
}

let keyCounter = 0

interface Props {
  question: Question
  items: FileItem[]
  setItems: (field: FileFieldId, updater: (items: FileItem[]) => FileItem[]) => void
  error?: string
  errorId: string
}

export default function FileUpload({ question, items, setItems, error, errorId }: Props) {
  const field = question.id as FileFieldId
  const rules = question.file!
  const inputId = `q-${field}`
  const [rejects, setRejects] = useState<string[]>([])
  const [dragging, setDragging] = useState(false)
  const started = useRef(new Set<string>())
  const controllers = useRef(new Map<string, AbortController>())

  const update = (key: string, patch: Partial<FileItem>) =>
    setItems(field, (list) => list.map((it) => (it.key === key ? { ...it, ...patch } : it)))

  // Upload queue: start queued files, a few at a time.
  useEffect(() => {
    const active = items.filter((i) => i.status === 'uploading').length
    const next = items.filter((i) => i.status === 'queued' && !started.current.has(i.key))
    next.slice(0, Math.max(0, CONCURRENCY - active)).forEach((item) => {
      started.current.add(item.key)
      const controller = new AbortController()
      controllers.current.set(item.key, controller)
      update(item.key, { status: 'uploading', progress: 0, message: undefined })
      const ext = extensionOf(item.name)
      upload(`intake/${field}/${safeFileName(item.name, ext)}`, item.file, {
        access: 'public',
        handleUploadUrl: '/api/intake/upload',
        clientPayload: JSON.stringify({ field, size: item.size }),
        contentType: item.contentType,
        multipart: item.size > 10 * 1024 * 1024,
        abortSignal: controller.signal,
        onUploadProgress: ({ percentage }) => update(item.key, { progress: percentage }),
      })
        .then((blob) => {
          update(item.key, {
            status: 'done',
            progress: 100,
            result: {
              field,
              url: blob.url,
              pathname: blob.pathname,
              name: item.name,
              size: item.size,
              contentType: item.contentType,
            },
          })
        })
        .catch((err: unknown) => {
          if (controller.signal.aborted) return
          const raw = err instanceof Error ? err.message : ''
          const known = /25 MB|not allowed|intake/i.test(raw)
          update(item.key, {
            status: 'error',
            message: known
              ? raw.replace(/^Vercel Blob:\s*/i, '')
              : 'Upload failed. Check your connection and try again.',
          })
        })
        .finally(() => {
          controllers.current.delete(item.key)
          started.current.delete(item.key)
        })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  // Abort running uploads when the field is hidden or unmounted.
  useEffect(() => {
    const ctrls = controllers.current
    return () => {
      ctrls.forEach((c) => c.abort())
    }
  }, [])

  const addFiles = (list: FileList | File[]) => {
    const picked = Array.from(list)
    const problems: string[] = []
    const accepted: FileItem[] = []
    let room = rules.maxFiles - items.length
    for (const file of picked) {
      const ext = extensionOf(file.name)
      if (!rules.extensions.includes(ext)) {
        problems.push(
          `"${file.name}" was not added: ${ext ? `.${ext}` : 'this'} files aren't accepted here. Use ${rules.extensions
            .map((e) => e.toUpperCase())
            .join(', ')}.`,
        )
        continue
      }
      if (file.size > rules.maxBytes) {
        problems.push(`"${file.name}" was not added: it is ${formatBytes(file.size)}, and the limit is 25 MB per file.`)
        continue
      }
      if (file.size === 0) {
        problems.push(`"${file.name}" was not added: the file is empty.`)
        continue
      }
      if (room <= 0) {
        problems.push(`"${file.name}" was not added: you can upload up to ${rules.maxFiles} files here.`)
        continue
      }
      room--
      accepted.push({
        key: `f${Date.now()}-${keyCounter++}`,
        file,
        name: file.name,
        size: file.size,
        contentType: FILE_CONTENT_TYPES[ext],
        status: 'queued',
        progress: 0,
        preview: PREVIEWABLE.has(ext) ? URL.createObjectURL(file) : undefined,
      })
    }
    setRejects(problems)
    if (accepted.length) setItems(field, (l) => [...l, ...accepted])
  }

  const remove = (item: FileItem) => {
    controllers.current.get(item.key)?.abort()
    if (item.preview) URL.revokeObjectURL(item.preview)
    setItems(field, (l) => l.filter((i) => i.key !== item.key))
  }

  const retry = (item: FileItem) => update(item.key, { status: 'queued', progress: 0, message: undefined })

  const accept = rules.extensions.map((e) => `.${e}`).join(',') + (rules.extensions.includes('heic') ? ',image/heic' : '')
  const hintId = `${inputId}-hint`
  const describedBy = [hintId, error ? errorId : null].filter(Boolean).join(' ')

  return (
    <div>
      <div
        className={`${styles.drop} ${dragging ? styles.dropActive : ''}`}
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files)
        }}
        onClick={(e) => {
          const t = e.target as HTMLElement
          if (t.tagName !== 'LABEL' && t.tagName !== 'INPUT') document.getElementById(inputId)?.click()
        }}
      >
        <input
          id={inputId}
          className={styles.fileInput}
          type="file"
          multiple
          accept={accept}
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
          onChange={(e) => {
            if (e.target.files?.length) addFiles(e.target.files)
            e.target.value = ''
          }}
        />
        <label htmlFor={inputId} className={styles.dropTitle} style={{ cursor: 'pointer' }}>
          Drag files here or click to choose
        </label>
        <span id={hintId} className={styles.dropHint}>
          {rules.extensions.map((e) => e.toUpperCase()).join(', ')} · up to 25 MB each · max {rules.maxFiles} files
        </span>
      </div>

      {rejects.length > 0 && (
        <ul className={styles.rejects} role="alert">
          {rejects.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <ul className={styles.fileList} aria-label="Chosen files">
          {items.map((item) => (
            <li key={item.key} className={styles.fileItem}>
              {item.preview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className={styles.thumb} src={item.preview} alt="" />
              ) : (
                <span className={styles.thumbIcon} aria-hidden="true">
                  {extensionOf(item.name)}
                </span>
              )}
              <div className={styles.fileMeta}>
                <div className={styles.fileName} title={item.name}>
                  {item.name}
                </div>
                <div className={styles.fileSub}>
                  {formatBytes(item.size)}
                  {item.status === 'queued' && ' · Waiting…'}
                  {item.status === 'uploading' && ` · Uploading ${Math.round(item.progress)}%`}
                  {item.status === 'done' && ' · Uploaded'}
                  {item.status === 'error' && ` · ${item.message}`}
                </div>
                {(item.status === 'uploading' || item.status === 'queued') && (
                  <div
                    className={styles.bar}
                    role="progressbar"
                    aria-label={`Uploading ${item.name}`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(item.progress)}
                  >
                    <div className={styles.barFill} style={{ width: `${item.progress}%` }} />
                  </div>
                )}
              </div>
              <div className={styles.fileActions}>
                {item.status === 'error' && (
                  <button type="button" className={styles.smallButton} onClick={() => retry(item)}>
                    Retry
                  </button>
                )}
                <button
                  type="button"
                  className={styles.smallButton}
                  onClick={() => remove(item)}
                  aria-label={`Remove ${item.name}`}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
