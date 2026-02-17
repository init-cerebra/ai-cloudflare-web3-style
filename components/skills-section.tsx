"use client"

import { useEffect, useRef, useState } from "react"

const devopsSkills = [
  { name: "Kubernetes", level: 95, icon: "K8s" },
  { name: "Terraform", level: 90, icon: "TF" },
  { name: "Jenkins", level: 88, icon: "JK" },
  { name: "AWS", level: 92, icon: "AWS" },
  { name: "Docker", level: 95, icon: "DK" },
  { name: "CI/CD", level: 90, icon: "CI" },
]

const web3Skills = [
  { name: "Ethereum", level: 88, icon: "ETH" },
  { name: "Solana", level: 82, icon: "SOL" },
  { name: "Solidity", level: 85, icon: "SOL" },
  { name: "Web3.js", level: 80, icon: "W3" },
]

const blockchainTools = [
  { name: "Hardhat", level: 85 },
  { name: "Truffle", level: 78 },
  { name: "IPFS", level: 75 },
  { name: "TheGraph", level: 72 },
]

function SkillBar({ name, level, color }: { name: string; level: number; color: "cyan" | "purple" }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const barColor = color === "cyan"
    ? "bg-gradient-to-r from-neon-cyan to-neon-blue"
    : "bg-gradient-to-r from-neon-purple to-neon-blue"

  return (
    <div ref={ref} className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${barColor}`}
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  )
}

function SkillPill({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="glass flex items-center gap-2 rounded-lg px-3 py-2 transition-all hover:border-neon-cyan/30 hover:bg-neon-cyan/5">
      <span className="flex h-6 w-6 items-center justify-center rounded bg-neon-cyan/10 font-mono text-[10px] font-bold text-neon-cyan">
        {icon}
      </span>
      <span className="text-sm text-foreground">{name}</span>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Skills
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Skill categories as pills */}
        <div className="mb-10">
          <h3 className="mb-4 text-lg font-semibold text-foreground">DevOps Skills</h3>
          <div className="flex flex-wrap gap-3">
            {devopsSkills.map((skill) => (
              <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Web3 Skills</h3>
          <div className="flex flex-wrap gap-3">
            {web3Skills.map((skill) => (
              <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Skill bars in glass cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass neon-glow-cyan rounded-xl p-6">
            <h3 className="mb-6 text-lg font-semibold text-neon-cyan">DevOps Proficiency</h3>
            <div className="flex flex-col gap-5">
              {devopsSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color="cyan" />
              ))}
            </div>
          </div>

          <div className="glass neon-glow-purple rounded-xl p-6">
            <h3 className="mb-6 text-lg font-semibold text-neon-purple">Blockchain Tools</h3>
            <div className="flex flex-col gap-5">
              {web3Skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color="purple" />
              ))}
              {blockchainTools.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color="purple" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
