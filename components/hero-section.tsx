"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

function TypeWriter({ text, speed = 40 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("")
  const idx = useRef(0)

  useEffect(() => {
    idx.current = 0
    setDisplayed("")
    const interval = setInterval(() => {
      if (idx.current < text.length) {
        setDisplayed(text.slice(0, idx.current + 1))
        idx.current++
      } else {
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <span>
      {displayed}
      <span className="animate-blink text-neon-cyan">_</span>
    </span>
  )
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16 sm:px-6"
    >
      {/* Subtle radial glow (no blur filter, just gradient bg) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #00f3ff, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Tag line */}
        <div className="mb-6 inline-flex items-center gap-2 rounded border border-border bg-secondary/50 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-dot-pulse text-neon-cyan" />
          <span className="text-[11px] uppercase tracking-widest text-neon-cyan">
            DevOps / Web3
          </span>
        </div>

        {/* Name */}
        <h1 className="mb-3 text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          <span className="neon-text-cyan text-neon-cyan">Viacheslav Krailo</span>
        </h1>

        <p className="mb-2 text-lg text-muted-foreground sm:text-xl">
          <TypeWriter text="6+ Years Experience" speed={50} />
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Expert in infrastructure orchestration, CI/CD pipelines, cloud architecture, and blockchain development. 
          Building reliable, scalable systems from Kubernetes clusters to smart contracts.
        </p>

        {/* Metrics row */}
        <div className="mx-auto mb-12 grid max-w-lg grid-cols-3 gap-4">
          {[
            { value: "99.99%", label: "Uptime" },
            { value: "2,000+", label: "Tasks Resolved" },
            { value: "6+", label: "Years" },
          ].map((m) => (
            <div key={m.label} className="fui-card rounded-lg px-4 py-4">
              <p className="text-xl font-bold text-neon-cyan sm:text-2xl">{m.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="fui-card rounded px-8 py-3 text-xs font-medium uppercase tracking-widest text-neon-cyan transition-all hover:bg-neon-cyan/10"
          >
            {">"} HIRE_ME
          </a>
          <a
            href="#experience"
            className="rounded border border-border px-8 py-3 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-all hover:border-neon-purple/30 hover:text-neon-purple"
          >
            {">"} VIEW_WORK
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#experience"
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-neon-cyan"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
