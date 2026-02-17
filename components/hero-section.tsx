"use client"

import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="overview"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      {/* Background gradient orbs */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #00e5ff 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
        style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4 inline-block rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neon-cyan">
              DevOps / Web3
            </div>

            <h1 className="mb-2 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">{"Hello, I'm"}</span>
              <br />
              <span className="neon-text-cyan text-neon-cyan">Viacheslav Krailo</span>
            </h1>

            <p className="mb-3 text-xl font-medium text-muted-foreground sm:text-2xl">
              DevOps Engineer & Web3 Specialist
            </p>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground lg:max-w-xl">
              Expert in infrastructure orchestration, CI/CD pipelines, cloud architecture,
              and blockchain development. Building reliable, scalable systems
              with 6+ years of hands-on experience.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <a
                href="#contact"
                className="glass neon-glow-cyan flex items-center gap-2 rounded-xl px-8 py-3.5 font-medium text-neon-cyan transition-all hover:bg-neon-cyan/15"
              >
                Hire Me
              </a>
              <a
                href="#experience"
                className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-8 py-3.5 font-medium text-foreground transition-all hover:border-neon-purple/30 hover:bg-neon-purple/5"
              >
                View Work
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
              {[
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground transition-all hover:border-neon-cyan/30 hover:text-neon-cyan"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative flex-1">
            <div className="animate-float relative mx-auto w-full max-w-md lg:max-w-lg">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-2xl bg-neon-cyan/5 blur-2xl" aria-hidden="true" />

              {/* Ethereum-inspired 3D diamond */}
              <div className="glass neon-glow-cyan relative flex aspect-square items-center justify-center rounded-2xl p-8">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  {/* Ethereum diamond shape */}
                  <polygon
                    points="100,15 170,100 100,135 30,100"
                    fill="url(#diamondGrad)"
                    opacity="0.9"
                  />
                  <polygon
                    points="100,135 170,100 100,185 30,100"
                    fill="url(#diamondGrad2)"
                    opacity="0.7"
                  />
                  {/* Inner lines */}
                  <line x1="100" y1="15" x2="100" y2="185" stroke="#00e5ff" strokeWidth="0.5" opacity="0.5" />
                  <line x1="30" y1="100" x2="170" y2="100" stroke="#00e5ff" strokeWidth="0.5" opacity="0.3" />

                  {/* Orbital rings */}
                  <ellipse cx="100" cy="100" rx="90" ry="30" stroke="#00e5ff" strokeWidth="0.5" opacity="0.2" transform="rotate(-20 100 100)" />
                  <ellipse cx="100" cy="100" rx="80" ry="25" stroke="#a855f7" strokeWidth="0.5" opacity="0.15" transform="rotate(25 100 100)" />

                  {/* Small nodes */}
                  <circle cx="40" cy="55" r="3" fill="#00e5ff" opacity="0.6" />
                  <circle cx="160" cy="65" r="2" fill="#a855f7" opacity="0.5" />
                  <circle cx="55" cy="155" r="2.5" fill="#00e5ff" opacity="0.4" />
                  <circle cx="150" cy="150" r="2" fill="#a855f7" opacity="0.5" />

                  <defs>
                    <linearGradient id="diamondGrad" x1="100" y1="15" x2="100" y2="135">
                      <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="diamondGrad2" x1="100" y1="100" x2="100" y2="185">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center lg:mt-20">
          <a
            href="#metrics"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-neon-cyan"
            aria-label="Scroll to metrics"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
