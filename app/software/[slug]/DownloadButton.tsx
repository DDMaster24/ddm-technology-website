'use client'

interface Download {
  platform: string
  architecture: string
  version: string
  size: string
  url: string
  releaseDate: string
}

interface DownloadButtonProps {
  download: Download
  productName: string
}

export default function DownloadButton({ download, productName }: DownloadButtonProps) {
  const handleDownload = () => {
    // Track download
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download', {
        event_category: 'Software',
        event_label: `${productName} - ${download.platform} ${download.architecture}`,
      })
    }

    // Trigger download
    window.location.href = download.url
  }

  return (
    <button
      onClick={handleDownload}
      className="btn btn-primary"
      style={{ minWidth: '180px' }}
    >
      ⬇️ Download
    </button>
  )
}
