import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    title: "Infrastructure Lead",
    company: "Major Cloud Provider",
    period: "2022 - Present",
    description:
      "Lead cloud infrastructure team. Designed and deployed multi-region Kubernetes clusters serving 10M+ requests daily. Achieved 99.99% uptime SLA.",
    tags: ["Kubernetes", "AWS", "Terraform", "ArgoCD"],
    color: "cyan" as const,
  },
  {
    title: "Continuous Integration Optimization",
    company: "FinTech Startup",
    period: "2020 - 2022",
    description:
      "Redesigned CI/CD pipelines reducing build times by 60%. Implemented GitOps workflows and automated security scanning across 50+ microservices.",
    tags: ["Jenkins", "Docker", "GitHub Actions", "SonarQube"],
    color: "purple" as const,
  },
  {
    title: "Cloud Migration",
    company: "Enterprise Solutions Corp",
    period: "2019 - 2020",
    description:
      "Migrated legacy on-premise infrastructure to AWS. Reduced infrastructure costs by 40% while improving performance and reliability.",
    tags: ["AWS", "Terraform", "Ansible", "CloudFormation"],
    color: "cyan" as const,
  },
  {
    title: "Web3 Infrastructure",
    company: "Blockchain Protocol",
    period: "2021 - Present",
    description:
      "Built and maintained validator nodes for Ethereum and Solana networks. Developed smart contract deployment pipelines and monitoring dashboards.",
    tags: ["Ethereum", "Solana", "Hardhat", "IPFS"],
    color: "purple" as const,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Experience
          </h2>
          <div className="h-px flex-1 bg-border" />
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-neon-cyan transition-colors hover:text-neon-cyan/80"
          >
            View All <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((exp) => {
            const borderClass = exp.color === "cyan" ? "hover:border-neon-cyan/30" : "hover:border-neon-purple/30"
            const glowClass = exp.color === "cyan" ? "neon-glow-cyan" : "neon-glow-purple"
            const dotColor = exp.color === "cyan" ? "bg-neon-cyan" : "bg-neon-purple"
            const tagBg = exp.color === "cyan" ? "bg-neon-cyan/10 text-neon-cyan" : "bg-neon-purple/10 text-neon-purple"

            return (
              <article
                key={exp.title}
                className={`glass group cursor-pointer rounded-xl p-6 transition-all hover:scale-[1.01] ${borderClass} ${glowClass}`}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`h-2.5 w-2.5 rounded-full ${dotColor}`} />
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium ${tagBg}`}
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
