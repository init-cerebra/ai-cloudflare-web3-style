"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#overview" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-cyan/10 neon-glow-cyan">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-neon-cyan"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-lg font-semibold text-foreground">
            Viacheslav Krailo
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-neon-cyan"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-lg bg-neon-cyan/10 px-5 py-2 text-sm font-medium text-neon-cyan transition-all hover:bg-neon-cyan/20 neon-glow-cyan md:block"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="glass-strong border-t border-border px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-neon-cyan/5 hover:text-neon-cyan"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-neon-cyan/10 px-5 py-3 text-center text-sm font-medium text-neon-cyan transition-all hover:bg-neon-cyan/20"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
