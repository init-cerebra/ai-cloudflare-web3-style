"use client"

import { useEffect, useRef, useState } from "react"

interface Skill {
  name: string
  level: number
  abbr: string
}

const devopsSkills: Skill[] = [
  { name: "Kubernetes", level: 95, abbr: "K8s" },
  { name: "Terraform", level: 90, abbr: "TF" },
  { name: "Jenkins", level: 88, abbr: "JK" },
  { name: "AWS", level: 92, abbr: "AWS" },
  { name: "Docker", level: 95, abbr: "DK" },
  { name: "GCP", level: 87, abbr: "GCP" },
]

const web3Skills: Skill[] = [
  { name: "Ethereum", level: 88, abbr: "ETH" },
  { name: "Solana", level: 82, abbr: "SOL" },
  { name: "Solidity", level: 85, abbr: "SOL" },
  { name: "IPFS", level: 78, abbr: "IFS" },
]

const tools: Skill[] = [
  { name: "Cilium", level: 86, abbr: "CIL" },
  { name: "FluxCD", level: 90, abbr: "FCD" },
  { name: "Helm", level: 92, abbr: "HLM" },
  { name: "Vault", level: 84, abbr: "VLT" },
]

function SkillBar({ skill, color, delay }: { skill: Skill; color: "cyan" | "purple"; delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const barColor = color === "cyan" ? "bg-neon-cyan" : "bg-neon-purple"

  return (
    <div ref={ref} className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`flex h-5 w-7 items-center justify-center rounded text-[8px] font-bold ${color === "cyan" ? "bg-neon-cyan/10 text-neon-cyan" : "bg-neon-purple/10 text-neon-purple"}`}>
            {skill.abbr}
          </span>
          <span className="text-xs text-foreground">{skill.name}</span>
        </div>
        <span className="text-[10px] text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-secondary">
        <div
          className={`h-full rounded-full ${barColor} origin-left transition-transform duration-1000 ease-out`}
          style={{
            transform: visible ? `scaleX(${skill.level / 100})` : "scaleX(0)",
            transitionDelay: `${delay * 80}ms`,
          }}
        />
      </div>
    </div>
  )
}

function SkillGroup({
  title,
  skills,
  color,
}: {
  title: string
  skills: Skill[]
  color: "cyan" | "purple"
}) {
  const titleColor = color === "cyan" ? "text-neon-cyan" : "text-neon-purple"
  const hoverClass = color === "cyan" ? "" : "fui-card-purple"

  return (
    <div className={`fui-card ${hoverClass} rounded-lg p-5`}>
      <h3 className={`mb-5 text-[11px] font-bold uppercase tracking-widest ${titleColor}`}>
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} color={color} delay={i} />
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-8 flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neon-cyan">
            {">"} Skills
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Skill pills overview */}
        <div className="mb-8 flex flex-wrap gap-2">
          {[...devopsSkills, ...web3Skills, ...tools].map((s) => (
            <span
              key={s.name}
              className="fui-card rounded px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-cyan"
            >
              {s.name}
            </span>
          ))}
        </div>

        {/* Skill bars in 3-column grid */}
        <div className="grid gap-5 md:grid-cols-3">
          <SkillGroup title="DevOps Core" skills={devopsSkills} color="cyan" />
          <SkillGroup title="Web3 / Blockchain" skills={web3Skills} color="purple" />
          <SkillGroup title="Tooling" skills={tools} color="cyan" />
        </div>
      </div>
    </section>
  )
}
