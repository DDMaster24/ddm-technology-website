'use client'

import { useEffect, useRef } from 'react'
import styles from './NeuralBackground.module.css'

// Crimson to Ocean - Dark Red to Dark Blue palette (no orange)
const EMBER_OCEAN_COLORS = [
  { r: 220, g: 38, b: 38 },    // Bright Red #DC2626
  { r: 185, g: 28, b: 28 },    // Crimson #B91C1C
  { r: 30, g: 64, b: 175 },    // Dark Blue #1E40AF
  { r: 8, g: 145, b: 178 },    // Ocean Cyan #0891B2
]

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulse: number
  pulseSpeed: number
  colorIndex: number
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createNodes = () => {
      const nodeCount = Math.floor((canvas.width * canvas.height) / 25000)
      nodesRef.current = []

      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          colorIndex: Math.floor(Math.random() * EMBER_OCEAN_COLORS.length)
        })
      }
    }

    const drawNode = (node: Node) => {
      const pulseScale = 1 + Math.sin(node.pulse) * 0.3
      const radius = node.radius * pulseScale
      const color = EMBER_OCEAN_COLORS[node.colorIndex]

      // Outer glow
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, radius * 4
      )
      gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`)
      gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.15)`)
      gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)

      ctx.beginPath()
      ctx.arc(node.x, node.y, radius * 4, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Core
      ctx.beginPath()
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${0.7 + Math.sin(node.pulse) * 0.3})`
      ctx.fill()
    }

    const drawConnection = (node1: Node, node2: Node, distance: number, maxDistance: number) => {
      const opacity = (1 - distance / maxDistance) * 0.35
      const color1 = EMBER_OCEAN_COLORS[node1.colorIndex]
      const color2 = EMBER_OCEAN_COLORS[node2.colorIndex]

      ctx.beginPath()
      ctx.moveTo(node1.x, node1.y)
      ctx.lineTo(node2.x, node2.y)

      const gradient = ctx.createLinearGradient(node1.x, node1.y, node2.x, node2.y)
      gradient.addColorStop(0, `rgba(${color1.r}, ${color1.g}, ${color1.b}, ${opacity})`)
      gradient.addColorStop(1, `rgba(${color2.r}, ${color2.g}, ${color2.b}, ${opacity})`)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 1
      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const nodes = nodesRef.current
      const maxDistance = 150

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx
        node.y += node.vy
        node.pulse += node.pulseSpeed

        // Subtle mouse attraction
        const dx = mouseRef.current.x - node.x
        const dy = mouseRef.current.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200 && dist > 0) {
          node.vx += (dx / dist) * 0.01
          node.vy += (dy / dist) * 0.01
        }

        // Boundary bounce
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Speed limit
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy)
        if (speed > 0.5) {
          node.vx = (node.vx / speed) * 0.5
          node.vy = (node.vy / speed) * 0.5
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j]
          const distance = Math.sqrt(
            Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2)
          )
          if (distance < maxDistance) {
            drawConnection(node, other, distance, maxDistance)
          }
        }

        drawNode(node)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    resizeCanvas()
    createNodes()
    animate()

    window.addEventListener('resize', () => {
      resizeCanvas()
      createNodes()
    })
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.gradientOverlay} />
      <div className={styles.noiseOverlay} />
    </div>
  )
}
