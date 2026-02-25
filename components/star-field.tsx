"use client"

import { useEffect, useRef } from "react"

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let w = 0
    let h = 0
    let dpr = 1
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Re-scatter stars on resize
      for (const s of stars) {
        s.x = Math.random() * w
        s.y = Math.random() * h
      }
    }

    const STAR_COUNT = 80
    const stars: { x: number; y: number; r: number; a: number; phase: number }[] = []
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: 0,
        y: 0,
        r: Math.random() * 1 + 0.3,
        a: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2,
      })
    }

    resize()
    window.addEventListener("resize", resize)

    // Throttled draw -- 20fps is enough for subtle twinkle
    let raf: number
    let lastDraw = 0
    const FRAME_INTERVAL = 50 // ~20fps

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw)
      if (t - lastDraw < FRAME_INTERVAL) return
      lastDraw = t

      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        const flicker = Math.sin(t * 0.0006 + s.phase) * 0.3 + 0.7
        ctx.globalAlpha = s.a * flicker
        ctx.fillStyle = "#94a3b8"
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }
    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ willChange: "auto" }}
      aria-hidden="true"
    />
  )
}
