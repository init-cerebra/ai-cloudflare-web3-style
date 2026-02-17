import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-neon-cyan/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5 text-neon-cyan"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-sm text-muted-foreground">
            Viacheslav Krailo &middot; DevOps & Web3
          </span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, label: "GitHub" },
            { icon: Twitter, label: "Twitter" },
            { icon: Linkedin, label: "LinkedIn" },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-neon-cyan"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
