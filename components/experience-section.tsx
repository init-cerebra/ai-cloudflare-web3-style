"use client"

import { useState, useRef, Suspense, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { experienceData } from "@/lib/experience-data"
import type { ExperienceItem, ToolDetail } from "@/lib/experience-data"
import { SubNodeDetail } from "@/components/neural-processor"

interface SelectedTool {
  experienceId: string
  tool: ToolDetail
  color: "cyan" | "purple"
}

function ExperienceCard({
  item,
  onToolClick,
}: {
  item: ExperienceItem
  onToolClick: (tool: ToolDetail) => void
}) {
  const Icon = item.icon
  const isCyan = item.color === "cyan"
  const colorClass = isCyan ? "text-neon-cyan" : "text-neon-purple"
  const hoverClass = isCyan ? "" : "fui-card-purple"
  const tagBg = isCyan
    ? "bg-neon-cyan/8 text-neon-cyan border-neon-cyan/15"
    : "bg-neon-purple/8 text-neon-purple border-neon-purple/15"

  return (
    <article
      className={`fui-card ${hoverClass} group rounded-lg p-5`}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded border ${
              isCyan
                ? "border-neon-cyan/20 bg-neon-cyan/5"
                : "border-neon-purple/20 bg-neon-purple/5"
            }`}
          >
            <Icon className={`h-4 w-4 ${colorClass}`} />
          </div>
          <div>
            <h3
              className={`text-xs font-bold uppercase tracking-wider ${colorClass}`}
            >
              {item.title}
            </h3>
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              {item.period}
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
        {item.description}
      </p>

      {/* Stats */}
      <div className="mb-4 flex gap-4">
        {Object.entries(item.stats).map(([key, val]) => (
          <div key={key} className="fui-card rounded px-3 py-2">
            <p className={`text-sm font-bold ${colorClass}`}>{val}</p>
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
              {key}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive tool tags */}
      <div className="mb-3 flex items-center gap-2">
        <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
          {">"} Click to inspect:
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {item.tools.map((tool) => (
          <button
            key={tool.name}
            onClick={() => onToolClick(tool)}
            className={`cursor-pointer rounded border px-2.5 py-1 text-[10px] transition-transform duration-150 active:scale-95 hover:scale-[1.03] ${tagBg}`}
          >
            {tool.name}
          </button>
        ))}
        {/* Static tags for remaining items */}
        {item.tags
          .filter((tag) => !item.tools.find((t) => t.name === tag))
          .map((tag) => (
            <span
              key={tag}
              className={`rounded border px-2 py-0.5 text-[10px] opacity-50 ${tagBg}`}
            >
              {tag}
            </span>
          ))}
      </div>
    </article>
  )
}

export function ExperienceSection() {
  const [selectedTool, setSelectedTool] = useState<SelectedTool | null>(null)
  const detailRef = useRef<HTMLDivElement | null>(null)

  const handleToolClick = useCallback(
    (experienceId: string, tool: ToolDetail, color: "cyan" | "purple") => {
      setSelectedTool({ experienceId, tool, color })
    },
    []
  )

  const handleCloseDetail = useCallback(() => {
    setSelectedTool(null)
  }, [])

  // Auto-scroll to detail panel on mobile when a tool is selected
  useEffect(() => {
    if (selectedTool && detailRef.current) {
      // Small delay so the DOM has rendered the panel
      const timer = setTimeout(() => {
        detailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [selectedTool])

  return (
    <section id="experience" className="relative z-10 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-8 flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neon-cyan">
            {">"} Experience
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
            Click any tool for deep-dive
          </span>
        </div>

          {/* Experience cards grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {experienceData.map((item) => (
              <ExperienceCard
                key={item.id}
                item={item}
                onToolClick={(tool) =>
                  handleToolClick(item.id, tool, item.color)
                }
              />
            ))}
          </div>

          {/* Sub-Node Detail Overlay */}
          <div ref={detailRef} className="scroll-mt-20" />
          <AnimatePresence mode="wait">
            {selectedTool && (
              <motion.div
                key={selectedTool.tool.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mt-6"
              >
                <Suspense
                  fallback={
                    <div className="fui-card flex items-center justify-center rounded-lg p-8">
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Loading proof module...
                      </span>
                    </div>
                  }
                >
                  <SubNodeDetail
                    toolName={selectedTool.tool.name}
                    toolDescription={selectedTool.tool.description}
                    proofType={selectedTool.tool.proofType}
                    proofContent={selectedTool.tool.proofContent}
                    onClose={handleCloseDetail}
                    color={selectedTool.color}
                  />
                </Suspense>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </section>
  )
}
