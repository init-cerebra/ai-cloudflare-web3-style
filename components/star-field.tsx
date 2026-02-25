"use client"

import { useEffect, useRef } from "react"

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = 0
    let h = 0
    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }
    resize()
    window.addEventListener("resize", resize)

    const STAR_COUNT = 150
    const stars: { x: number; y: number; r: number; a: number; phase: number }[] = []
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
      })
    }

    let raf: number
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        const flicker = Math.sin(t * 0.0008 + s.phase) * 0.25 + 0.75
        ctx.globalAlpha = s.a * flicker
        ctx.fillStyle = "#94a3b8"
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
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
      aria-hidden="true"
    />
  )
}
