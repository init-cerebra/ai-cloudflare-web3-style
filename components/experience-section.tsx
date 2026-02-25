"use client"

import { Cloud, Activity, Database, Lock } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ExperienceItem {
  id: string
  title: string
  period: string
  icon: LucideIcon
  description: string
  tags: string[]
  stats: Record<string, string>
  color: "cyan" | "purple"
}

const experienceData: ExperienceItem[] = [
  {
    id: "k8s",
    title: "K8S ORCHESTRATION LEAD",
    period: "2022 - Present",
    icon: Cloud,
    description:
      "Orchestration of clusters with 500+ nodes. Implementation of GitOps (FluxCD) and transition to Talos OS for building DeCloud infrastructure.",
    tags: ["Kubernetes", "FluxCD", "Helm", "Talos OS", "Cilium"],
    stats: { Nodes: "542", Uptime: "99.99%" },
    color: "cyan",
  },
  {
    id: "mig",
    title: "CLOUD MIGRATION (AUTODOC CASE)",
    period: "2024 - 2026",
    icon: Activity,
    description:
      "Key Autodoc project: successful migration of 50TB+ critical data to GCP with zero downtime (Zero-downtime migration).",
    tags: ["GCP", "Terraform", "Python", "Cloud Migrate", "Ansible"],
    stats: { Data: "54TB+", Downtime: "0s" },
    color: "purple",
  },
  {
    id: "db",
    title: "HIGH-LOAD DATA PERSISTENCE",
    period: "2020 - 2022",
    icon: Database,
    description:
      "Management of 100+ database replicas. Optimization of ElasticSearch and ClickHouse for terabyte-scale log processing.",
    tags: ["ElasticSearch", "ClickHouse", "MongoDB", "Redis"],
    stats: { Replicas: "110", Scale: "TB-Level" },
    color: "cyan",
  },
  {
    id: "sec",
    title: "SECURITY & eBPF ARCHITECT",
    period: "2023 - Present",
    icon: Lock,
    description:
      "Implementation of Zero-trust architecture. Using eBPF for deep traffic analysis and kernel-level protection.",
    tags: ["Cilium", "eBPF", "Vault", "Trivy"],
    stats: { TrustLevel: "L5", Security: "Kernel" },
    color: "purple",
  },
]

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const Icon = item.icon
  const isCyan = item.color === "cyan"
  const colorClass = isCyan ? "text-neon-cyan" : "text-neon-purple"
  const hoverClass = isCyan ? "" : "fui-card-purple"
  const tagBg = isCyan
    ? "bg-neon-cyan/8 text-neon-cyan border-neon-cyan/15"
    : "bg-neon-purple/8 text-neon-purple border-neon-purple/15"

  return (
    <article className={`fui-card ${hoverClass} group rounded-lg p-5 transition-all`}>
      {/* Header row */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded border ${isCyan ? "border-neon-cyan/20 bg-neon-cyan/5" : "border-neon-purple/20 bg-neon-purple/5"}`}>
            <Icon className={`h-4 w-4 ${colorClass}`} />
          </div>
          <div>
            <h3 className={`text-xs font-bold uppercase tracking-wider ${colorClass}`}>
              {item.title}
            </h3>
            <p className="mt-0.5 text-[10px] text-muted-foreground">{item.period}</p>
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
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground">{key}</p>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded border px-2 py-0.5 text-[10px] ${tagBg}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-8 flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neon-cyan">
            {">"} Experience
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {experienceData.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
