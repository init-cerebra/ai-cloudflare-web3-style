"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, Layers, Clock } from "lucide-react"

const metrics = [
  {
    icon: CheckCircle,
    value: 99.99,
    suffix: "%",
    label: "Uptime Maintained",
    color: "cyan" as const,
  },
  {
    icon: Layers,
    value: 2000,
    suffix: "+",
    label: "Tasks Resolved",
    color: "purple" as const,
  },
  {
    icon: Clock,
    value: 6,
    suffix: "+",
    label: "Years Experience",
    color: "cyan" as const,
  },
]

function AnimatedNumber({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 2000
          const start = performance.now()
          const step = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCurrent(eased * target)
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {decimals > 0 ? current.toFixed(decimals) : Math.floor(current)}
      {suffix}
    </span>
  )
}

export function MetricsSection() {
  return (
    <section id="metrics" className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Metrics
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon
            const glowClass = metric.color === "cyan" ? "neon-glow-cyan" : "neon-glow-purple"
            const textClass = metric.color === "cyan" ? "text-neon-cyan" : "text-neon-purple"
            const bgClass = metric.color === "cyan" ? "bg-neon-cyan/10" : "bg-neon-purple/10"

            return (
              <div
                key={metric.label}
                className={`glass animate-border-glow rounded-xl p-6 transition-all hover:scale-[1.02] ${glowClass}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${bgClass}`}>
                    <Icon className={`h-5 w-5 ${textClass}`} />
                  </div>
                </div>
                <p className={`mb-1 font-mono text-3xl font-bold ${textClass}`}>
                  <AnimatedNumber
                    target={metric.value}
                    suffix={metric.suffix}
                    decimals={metric.value === 99.99 ? 2 : 0}
                  />
                </p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
