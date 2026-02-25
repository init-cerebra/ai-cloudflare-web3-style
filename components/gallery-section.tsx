"use client"

import { ExternalLink, Layers, Shield, Cpu, Globe, Server, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  icon: LucideIcon
  color: "cyan" | "purple"
}

const projects: Project[] = [
  {
    title: "K8s Auto-Scaler",
    description: "Custom Kubernetes auto-scaling with predictive algorithms for optimal resource allocation across 500+ nodes.",
    tags: ["Kubernetes", "Go", "Prometheus"],
    icon: Layers,
    color: "cyan",
  },
  {
    title: "DeCloud Infrastructure",
    description: "Decentralized cloud platform built on Talos OS with GitOps workflows and zero-trust networking.",
    tags: ["Talos OS", "FluxCD", "Cilium"],
    icon: Globe,
    color: "purple",
  },
  {
    title: "Zero-Downtime Migration",
    description: "Enterprise 54TB+ data migration to GCP with zero service interruption and automated rollback.",
    tags: ["GCP", "Terraform", "Ansible"],
    icon: Server,
    color: "cyan",
  },
  {
    title: "eBPF Security Suite",
    description: "Kernel-level security monitoring using eBPF for deep traffic analysis and threat detection.",
    tags: ["eBPF", "Cilium", "Vault"],
    icon: Shield,
    color: "purple",
  },
  {
    title: "CI/CD Orchestrator",
    description: "Multi-cloud deployment platform supporting zero-downtime releases across 50+ microservices.",
    tags: ["Jenkins", "ArgoCD", "Docker"],
    icon: Zap,
    color: "cyan",
  },
  {
    title: "Blockchain Validator Infra",
    description: "High-availability validator node infrastructure for Ethereum and Solana with 99.99% uptime.",
    tags: ["Ethereum", "Solana", "Monitoring"],
    icon: Cpu,
    color: "purple",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="relative z-10 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-8 flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neon-cyan">
            {">"} Architecture Gallery
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const Icon = p.icon
            const isCyan = p.color === "cyan"
            const colorClass = isCyan ? "text-neon-cyan" : "text-neon-purple"
            const hoverClass = isCyan ? "" : "fui-card-purple"
            const tagBg = isCyan
              ? "bg-neon-cyan/8 text-neon-cyan border-neon-cyan/15"
              : "bg-neon-purple/8 text-neon-purple border-neon-purple/15"

            return (
              <article
                key={p.title}
                className={`fui-card ${hoverClass} group cursor-pointer rounded-lg p-5 transition-all`}
              >
                {/* Icon area */}
                <div className="mb-4 flex h-20 items-center justify-center rounded border border-border bg-secondary/30">
                  <Icon className={`h-8 w-8 ${colorClass} opacity-60 transition-opacity group-hover:opacity-100`} />
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <h3 className={`text-xs font-bold uppercase tracking-wider ${colorClass}`}>
                    {p.title}
                  </h3>
                  <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <p className="mb-4 text-[11px] leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded border px-2 py-0.5 text-[9px] ${tagBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
