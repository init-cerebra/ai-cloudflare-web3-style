"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, X } from "lucide-react"

interface NeuralProcessorProps {
  isActive: boolean
  toolName: string
  onComplete: () => void
}

export function NeuralProcessor({ isActive, toolName, onComplete }: NeuralProcessorProps) {
  const [phase, setPhase] = useState<"idle" | "scanning" | "done">("idle")
  const [scanProgress, setScanProgress] = useState(0)

  useEffect(() => {
    if (!isActive) {
      setPhase("idle")
      setScanProgress(0)
      return
    }

    setPhase("scanning")
    setScanProgress(0)

    const duration = 1200
    const steps = 20
    const interval = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      setScanProgress(Math.min((step / steps) * 100, 100))
      if (step >= steps) {
        clearInterval(timer)
        setPhase("done")
        setTimeout(onComplete, 200)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isActive, onComplete])

  if (!isActive && phase === "idle") return null

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-3 py-4"
        >
          {/* CPU core with scan line */}
          <div className="relative flex h-16 w-16 items-center justify-center">
            <div
              className="absolute inset-0 rounded border transition-colors duration-300"
              style={{
                borderColor:
                  phase === "scanning"
                    ? "rgba(188, 19, 254, 0.5)"
                    : "rgba(0, 243, 255, 0.3)",
                boxShadow:
                  phase === "scanning"
                    ? "0 0 20px rgba(188, 19, 254, 0.2), inset 0 0 20px rgba(188, 19, 254, 0.05)"
                    : "0 0 20px rgba(0, 243, 255, 0.1)",
              }}
            />

            {/* Scan line */}
            {phase === "scanning" && (
              <motion.div
                className="absolute left-0 right-0 h-px"
                style={{ backgroundColor: "#bc13fe" }}
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            )}

            <Cpu
              className="h-7 w-7 transition-colors duration-300"
              style={{
                color: phase === "scanning" ? "#bc13fe" : "#00f3ff",
              }}
            />
          </div>

          {/* Status text */}
          <div className="text-center">
            <p
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{
                color: phase === "scanning" ? "#bc13fe" : "#00f3ff",
              }}
            >
              {phase === "scanning"
                ? "NEURAL_ANALYSIS_IN_PROGRESS"
                : "ANALYSIS_COMPLETE"}
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-wider text-muted-foreground">
              Processing: {toolName}
            </p>
          </div>

          {/* Progress bar */}
          <div className="h-px w-full max-w-[200px] overflow-hidden bg-secondary">
            <motion.div
              className="h-full origin-left"
              style={{
                backgroundColor: phase === "scanning" ? "#bc13fe" : "#00f3ff",
                width: `${scanProgress}%`,
              }}
              transition={{ duration: 0.05 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* =====================================================
   PROOF RENDERERS - These are lazy-loaded
   ===================================================== */

export function LogStreamProof({ content, title }: { content: string[]; title: string }) {
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    setLines([])
    let i = 0
    const timer = setInterval(() => {
      if (i < content.length) {
        setLines((prev) => [...prev, content[i]])
        i++
      } else {
        clearInterval(timer)
      }
    }, 150)
    return () => clearInterval(timer)
  }, [content])

  return (
    <div className="fui-card rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-dot-pulse text-neon-cyan" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-neon-cyan">
          {title}
        </span>
      </div>
      <div className="max-h-[240px] space-y-1.5 overflow-y-auto font-mono">
        {lines.map((line, i) => (
          <motion.p
            key={`${line}-${i}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[11px] leading-relaxed text-muted-foreground"
          >
            {line}
          </motion.p>
        ))}
        {lines.length < content.length && (
          <span className="inline-block h-3 w-1.5 animate-blink bg-neon-cyan" />
        )}
      </div>
    </div>
  )
}

export function DataTransferProof({ content, title }: { content: string[]; title: string }) {
  const [transferred, setTransferred] = useState(0)
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    setLines([])
    setTransferred(0)

    // Animate counter
    const target = 54.2
    const counterDuration = 2000
    const counterSteps = 60
    const counterInterval = counterDuration / counterSteps
    let step = 0
    const counterTimer = setInterval(() => {
      step++
      setTransferred(parseFloat(((step / counterSteps) * target).toFixed(1)))
      if (step >= counterSteps) {
        clearInterval(counterTimer)
        setTransferred(target)
      }
    }, counterInterval)

    // Animate log lines
    let i = 0
    const lineTimer = setInterval(() => {
      if (i < content.length) {
        setLines((prev) => [...prev, content[i]])
        i++
      } else {
        clearInterval(lineTimer)
      }
    }, 250)

    return () => {
      clearInterval(counterTimer)
      clearInterval(lineTimer)
    }
  }, [content])

  return (
    <div className="fui-card fui-card-purple rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-neon-purple animate-dot-pulse text-neon-purple" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-neon-purple">
          {title}
        </span>
      </div>

      {/* Transfer counter */}
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-neon-purple neon-text-purple">
          {transferred}
        </span>
        <span className="text-sm text-neon-purple">TB</span>
        <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground">
          Transferred
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-neon-purple"
          initial={{ width: "0%" }}
          animate={{ width: `${Math.min((transferred / 54.2) * 100, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Log lines */}
      <div className="max-h-[180px] space-y-1.5 overflow-y-auto">
        {lines.map((line, i) => (
          <motion.p
            key={`${line}-${i}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[11px] leading-relaxed text-muted-foreground"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  )
}

export function CanvasGraphProof({ content, title }: { content: string[]; title: string }) {
  const [lines, setLines] = useState<string[]>([])
  const [points, setPoints] = useState<number[]>([])

  useEffect(() => {
    setLines([])

    // Generate initial data points
    const initial = Array.from({ length: 20 }, () => 30 + Math.random() * 40)
    setPoints(initial)

    // Animate new points
    const pointTimer = setInterval(() => {
      setPoints((prev) => {
        const next = [...prev.slice(1), 30 + Math.random() * 40]
        return next
      })
    }, 400)

    // Animate log lines
    let i = 0
    const lineTimer = setInterval(() => {
      if (i < content.length) {
        setLines((prev) => [...prev, content[i]])
        i++
      } else {
        clearInterval(lineTimer)
      }
    }, 200)

    return () => {
      clearInterval(pointTimer)
      clearInterval(lineTimer)
    }
  }, [content])

  // Build SVG path
  const svgWidth = 300
  const svgHeight = 60
  const pathD = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * svgWidth
      const y = svgHeight - (p / 100) * svgHeight
      return `${i === 0 ? "M" : "L"} ${x} ${y}`
    })
    .join(" ")

  return (
    <div className="fui-card rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-dot-pulse text-neon-cyan" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-neon-cyan">
          {title}
        </span>
      </div>

      {/* Mini SVG graph */}
      <div className="mb-4 overflow-hidden rounded border border-border bg-secondary/30 p-2">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="h-[60px] w-full"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          {[0, 20, 40, 60].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2={svgWidth}
              y2={y}
              stroke="rgba(0, 243, 255, 0.06)"
              strokeWidth="0.5"
            />
          ))}
          {/* Data line */}
          <path
            d={pathD}
            fill="none"
            stroke="#00f3ff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Glow path */}
          <path
            d={pathD}
            fill="none"
            stroke="#00f3ff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.15"
          />
          {/* Last point pulse */}
          {points.length > 0 && (
            <>
              <circle
                cx={(19 / 19) * svgWidth}
                cy={svgHeight - (points[points.length - 1] / 100) * svgHeight}
                r="3"
                fill="#00f3ff"
                opacity="0.8"
              />
              <circle
                cx={(19 / 19) * svgWidth}
                cy={svgHeight - (points[points.length - 1] / 100) * svgHeight}
                r="6"
                fill="none"
                stroke="#00f3ff"
                strokeWidth="0.5"
                opacity="0.3"
              >
                <animate
                  attributeName="r"
                  values="3;8;3"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.4;0;0.4"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </>
          )}
        </svg>
      </div>

      {/* Log lines */}
      <div className="max-h-[140px] space-y-1.5 overflow-y-auto">
        {lines.map((line, i) => (
          <motion.p
            key={`${line}-${i}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[11px] leading-relaxed text-muted-foreground"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  )
}

export function KernelBootProof({ content, title }: { content: string[]; title: string }) {
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    setLines([])
    let i = 0
    const timer = setInterval(() => {
      if (i < content.length) {
        setLines((prev) => [...prev, content[i]])
        i++
      } else {
        clearInterval(timer)
      }
    }, 180)
    return () => clearInterval(timer)
  }, [content])

  return (
    <div className="fui-card fui-card-purple rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-neon-purple animate-dot-pulse text-neon-purple" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-neon-purple">
          {title}
        </span>
      </div>

      {/* Kernel boot simulation */}
      <div className="rounded border border-neon-purple/10 bg-black/50 p-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-neon-purple" />
          <span className="text-[9px] uppercase tracking-widest text-neon-purple">
            Secure Boot Sequence
          </span>
        </div>
        <div className="max-h-[200px] space-y-1.5 overflow-y-auto font-mono">
          {lines.map((line, i) => (
            <motion.p
              key={`${line}-${i}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className="text-[11px] leading-relaxed text-neon-purple/70"
            >
              {line}
            </motion.p>
          ))}
          {lines.length < content.length && (
            <span className="inline-block h-3 w-1.5 animate-blink bg-neon-purple" />
          )}
        </div>
      </div>
    </div>
  )
}

/* =====================================================
   SUB-NODE DETAIL OVERLAY
   ===================================================== */

interface SubNodeDetailProps {
  toolName: string
  toolDescription: string
  proofType: "log_stream" | "data_transfer" | "canvas_graph" | "kernel_boot"
  proofContent: string[]
  onClose: () => void
  color: "cyan" | "purple"
}

export function SubNodeDetail({
  toolName,
  toolDescription,
  proofType,
  proofContent,
  onClose,
  color,
}: SubNodeDetailProps) {
  const [showProof, setShowProof] = useState(false)
  const [processing, setProcessing] = useState(true)

  const handleProcessingComplete = useCallback(() => {
    setProcessing(false)
    setShowProof(true)
  }, [])

  const isCyan = color === "cyan"
  const colorClass = isCyan ? "text-neon-cyan" : "text-neon-purple"

  const renderProof = () => {
    switch (proofType) {
      case "log_stream":
        return <LogStreamProof content={proofContent} title="AI_DECRYPTED_OUTPUT" />
      case "data_transfer":
        return <DataTransferProof content={proofContent} title="DATA_TRANSFER_ANALYSIS" />
      case "canvas_graph":
        return <CanvasGraphProof content={proofContent} title="REALTIME_METRICS" />
      case "kernel_boot":
        return <KernelBootProof content={proofContent} title="KERNEL_BOOT_SEQUENCE" />
    }
  }

  return (
    <motion.div
      layoutId={`tool-${toolName}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fui-card rounded-lg p-5"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h4 className={`text-sm font-bold uppercase tracking-wider ${colorClass}`}>
            {toolName}
          </h4>
          <p className="mt-1 text-[11px] text-muted-foreground">{toolDescription}</p>
        </div>
        <button
          onClick={onClose}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-border text-muted-foreground transition-colors hover:border-destructive/30 hover:text-destructive"
          aria-label="Close detail view"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Neural Processing */}
      {processing && (
        <NeuralProcessor
          isActive={processing}
          toolName={toolName}
          onComplete={handleProcessingComplete}
        />
      )}

      {/* Proof Output */}
      <AnimatePresence>
        {showProof && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderProof()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
