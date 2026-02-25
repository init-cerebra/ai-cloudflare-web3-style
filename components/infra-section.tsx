"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Server, Shield, Cpu, Network, HardDrive, Lock } from "lucide-react"
import { currentInfra } from "@/lib/experience-data"

function LiveMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="fui-card rounded px-3 py-2.5">
      <p className="text-[9px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-0.5 text-xs font-bold text-neon-cyan">{value}</p>
    </div>
  )
}

function StackNode({
  name,
  description,
  status,
  index,
}: {
  name: string
  description: string
  status: string
  index: number
}) {
  const statusColor =
    status === "ACTIVE"
      ? "bg-neon-cyan text-neon-cyan"
      : status === "ENFORCING"
        ? "bg-neon-purple text-neon-purple"
        : "bg-yellow-500 text-yellow-500"

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="fui-card group rounded-lg p-4 transition-all"
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Server className="h-3.5 w-3.5 text-neon-cyan" />
          <span className="text-xs font-bold uppercase tracking-wider text-foreground">
            {name}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={`h-1.5 w-1.5 rounded-full animate-dot-pulse ${statusColor}`}
          />
          <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
            {status}
          </span>
        </div>
      </div>
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  )
}

function UptimeDisplay() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const base = 86400 * 247 + 3600 * 14 + 60 * 23
    setSeconds(base)
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <div className="flex items-baseline gap-1 font-mono">
      <span className="text-lg font-bold text-neon-cyan">{days}</span>
      <span className="text-[9px] text-muted-foreground">D</span>
      <span className="text-lg font-bold text-neon-cyan">{pad(hours)}</span>
      <span className="text-[9px] text-muted-foreground">H</span>
      <span className="text-lg font-bold text-neon-cyan">{pad(mins)}</span>
      <span className="text-[9px] text-muted-foreground">M</span>
      <span className="text-lg font-bold text-neon-cyan animate-blink">
        {pad(secs)}
      </span>
      <span className="text-[9px] text-muted-foreground">S</span>
    </div>
  )
}

export function InfraSection() {
  return (
    <section id="infra" className="relative z-10 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-8 flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neon-purple">
            {">"} Current Node State
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
            DeCloud Project
          </span>
        </div>

        {/* Main infra card */}
        <div className="fui-card fui-card-purple rounded-lg p-6">
          {/* Top row: node identity + uptime */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-neon-purple" />
                <span className="text-sm font-bold uppercase tracking-wider text-neon-purple neon-text-purple">
                  {currentInfra.nodeName}
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground">
                Decentralized cloud infrastructure built on bare-metal Kubernetes
              </p>
            </div>
            <div className="fui-card rounded-lg px-4 py-2.5">
              <p className="mb-0.5 text-[9px] uppercase tracking-widest text-muted-foreground">
                Uptime
              </p>
              <UptimeDisplay />
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 rounded border border-neon-purple/10 bg-black/30 p-4">
            <p className="text-xs leading-relaxed text-muted-foreground">
              Building a decentralized cloud (DeCloud) on Talos OS. Full
              automation through declarative APIs, network security at the kernel
              level via eBPF. Immutable OS with dm-verity verified root
              filesystem, TPM2 secure boot chain, and zero-trust networking
              through Cilium service mesh.
            </p>
          </div>

          {/* Tech stack nodes */}
          <div className="mb-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neon-purple">
              Stack Components
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {currentInfra.techStack.map((tech, i) => (
                <StackNode
                  key={tech.name}
                  name={tech.name}
                  description={tech.description}
                  status={tech.status}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Live metrics grid */}
          <div className="mb-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neon-purple">
              Security Metrics
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Object.entries(currentInfra.metrics).map(([key, value]) => (
                <LiveMetric key={key} label={key} value={value} />
              ))}
            </div>
          </div>

          {/* Security state */}
          <div className="flex items-center gap-3 rounded border border-neon-purple/10 bg-black/20 px-4 py-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-neon-purple/20 bg-neon-purple/5">
              <Shield className="h-3.5 w-3.5 text-neon-purple" />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-neon-purple">
                Security Protocol
              </p>
              <p className="text-[11px] text-muted-foreground">
                {currentInfra.securityState}
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <Lock className="h-3 w-3 text-neon-purple" />
              <span className="text-[9px] uppercase tracking-widest text-neon-purple">
                Encrypted
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
