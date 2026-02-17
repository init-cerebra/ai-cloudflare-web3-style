"use client"

import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "K8s Auto-Scaler",
    description: "Custom Kubernetes auto-scaling solution with predictive algorithms for optimal resource allocation.",
    tags: ["Kubernetes", "Go", "Prometheus"],
    color: "cyan" as const,
  },
  {
    title: "DeFi Protocol Dashboard",
    description: "Real-time monitoring dashboard for decentralized finance protocols with TVL tracking and alerts.",
    tags: ["Ethereum", "React", "TheGraph"],
    color: "purple" as const,
  },
  {
    title: "CI/CD Platform",
    description: "Enterprise CI/CD orchestration platform supporting multi-cloud deployments with zero-downtime releases.",
    tags: ["Jenkins", "Terraform", "AWS"],
    color: "cyan" as const,
  },
  {
    title: "NFT Minting Engine",
    description: "Scalable NFT minting infrastructure with IPFS storage and on-chain metadata management.",
    tags: ["Solana", "Rust", "IPFS"],
    color: "purple" as const,
  },
  {
    title: "Infra Monitoring Suite",
    description: "Comprehensive infrastructure monitoring with custom Grafana dashboards and PagerDuty integration.",
    tags: ["Grafana", "Prometheus", "Alertmanager"],
    color: "cyan" as const,
  },
  {
    title: "Smart Contract Audit Tool",
    description: "Automated security analysis tool for Solidity smart contracts with vulnerability detection.",
    tags: ["Solidity", "Python", "Security"],
    color: "purple" as const,
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Architecture Gallery
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const borderClass = project.color === "cyan" ? "hover:border-neon-cyan/30" : "hover:border-neon-purple/30"
            const glowClass = project.color === "cyan" ? "neon-glow-cyan" : "neon-glow-purple"
            const accentColor = project.color === "cyan" ? "text-neon-cyan" : "text-neon-purple"
            const tagBg = project.color === "cyan" ? "bg-neon-cyan/10 text-neon-cyan" : "bg-neon-purple/10 text-neon-purple"

            return (
              <article
                key={project.title}
                className={`glass group cursor-pointer rounded-xl p-6 transition-all hover:scale-[1.02] ${borderClass} ${glowClass}`}
              >
                {/* Abstract project visual */}
                <div className="mb-5 flex h-32 items-center justify-center rounded-lg bg-secondary/40">
                  <div className="relative">
                    <div
                      className={`h-16 w-16 rounded-xl ${project.color === "cyan" ? "bg-neon-cyan/10" : "bg-neon-purple/10"} flex items-center justify-center`}
                    >
                      <div className={`h-6 w-6 rounded ${project.color === "cyan" ? "bg-neon-cyan/30" : "bg-neon-purple/30"}`} />
                    </div>
                    {/* Decorative dots */}
                    <div className={`absolute -right-2 -top-2 h-2 w-2 rounded-full ${project.color === "cyan" ? "bg-neon-cyan/50" : "bg-neon-purple/50"}`} />
                    <div className={`absolute -bottom-1 -left-3 h-1.5 w-1.5 rounded-full ${project.color === "cyan" ? "bg-neon-cyan/30" : "bg-neon-purple/30"}`} />
                  </div>
                </div>

                <div className="mb-3 flex items-center justify-between">
                  <h3 className={`font-semibold ${accentColor}`}>{project.title}</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md px-2 py-0.5 text-xs font-medium ${tagBg}`}
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
