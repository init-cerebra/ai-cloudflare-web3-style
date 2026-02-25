"use client"

import { useState } from "react"
import { Menu, X, Terminal } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Logo + Name */}
        <a href="#top" className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-neon-cyan" />
          <span className="text-sm text-foreground">
            Viacheslav Krailo{" "}
            <span className="text-neon-cyan">{"//"}</span>{" "}
            <span className="text-muted-foreground">Infra_OS</span>
          </span>
          <span className="ml-1 inline-block h-4 w-1.5 bg-neon-cyan animate-blink" aria-hidden="true" />
        </a>

        {/* Right: Status + CTA (desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-dot-pulse text-neon-cyan" />
            Node: UA-FRANKIVSK
          </span>
          <a
            href="#contact"
            className="fui-card rounded px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-neon-cyan transition-all hover:bg-neon-cyan/10"
          >
            {">"} HIRE_ME
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-2 pt-3">
            <span className="flex items-center gap-2 px-2 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
              Node: UA-FRANKIVSK
            </span>
            {["experience", "skills", "gallery", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-cyan"
              >
                {">"} {s}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 fui-card rounded px-3 py-2 text-center text-xs font-medium uppercase tracking-wider text-neon-cyan"
            >
              {">"} HIRE_ME
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
