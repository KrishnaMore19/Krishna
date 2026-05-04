'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  r: number
  opacity: number
  speed: number
  direction: number
}

export default function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let stars: Star[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 6000)
      stars = Array.from({ length: Math.min(count, 250) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        opacity: Math.random() * 0.7 + 0.15,
        speed: Math.random() * 0.015 + 0.003,
        direction: Math.random() > 0.5 ? 1 : -1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Subtle nebula glow at top
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5, 0, 0,
        canvas.width * 0.5, 0, canvas.height * 0.55
      )
      gradient.addColorStop(0, 'rgba(0,229,255,0.035)')
      gradient.addColorStop(0.5, 'rgba(157,78,221,0.02)')
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Stars
      stars.forEach((s) => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)

        // Slight blue/white tint on some stars
        const blue = Math.random() > 0.85
        ctx.fillStyle = blue
          ? `rgba(150,200,255,${s.opacity})`
          : `rgba(220,225,255,${s.opacity})`
        ctx.fill()

        // Twinkle
        s.opacity += s.speed * s.direction
        if (s.opacity > 0.85 || s.opacity < 0.1) {
          s.direction *= -1
        }
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="star-canvas"
      aria-hidden="true"
    />
  )
}
