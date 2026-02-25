"use client"

import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  return (
    <section id="contact" className="relative z-10 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-8 flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neon-cyan">
            {">"} Contact
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info side */}
          <div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">
              {"Let's Work "}
              <span className="neon-text-cyan text-neon-cyan">Together</span>
            </h3>
            <p className="mb-8 max-w-md text-xs leading-relaxed text-muted-foreground">
              Looking for a skilled DevOps engineer or Web3 infrastructure specialist?
              Open to new opportunities and collaborations. Reach out via the form or any channel below.
            </p>

            <div className="flex flex-col gap-3">
              <div className="fui-card flex items-center gap-4 rounded-lg p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded border border-neon-cyan/20 bg-neon-cyan/5">
                  <Mail className="h-4 w-4 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="text-xs text-foreground">hello@krailo.dev</p>
                </div>
              </div>

              <div className="fui-card flex items-center gap-4 rounded-lg p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded border border-neon-purple/20 bg-neon-purple/5">
                  <MapPin className="h-4 w-4 text-neon-purple" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="text-xs text-foreground">Ivano-Frankivsk, UA / Remote</p>
                </div>
              </div>

              {/* Social row */}
              <div className="mt-2 flex gap-2">
                {[
                  { icon: Github, label: "GitHub" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="fui-card flex h-9 w-9 items-center justify-center rounded text-muted-foreground transition-colors hover:text-neon-cyan"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form side */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="fui-card rounded-lg p-5"
          >
            <div className="mb-4">
              <label htmlFor="name" className="mb-1.5 block text-[10px] uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="> your_name"
                className="w-full rounded border border-border bg-secondary/50 px-3 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-neon-cyan/30 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-1.5 block text-[10px] uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="> your@email.com"
                className="w-full rounded border border-border bg-secondary/50 px-3 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-neon-cyan/30 focus:outline-none"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="mb-1.5 block text-[10px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="> describe your project..."
                className="w-full resize-none rounded border border-border bg-secondary/50 px-3 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-neon-cyan/30 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="fui-card flex w-full items-center justify-center gap-2 rounded py-2.5 text-xs font-medium uppercase tracking-widest text-neon-cyan transition-all hover:bg-neon-cyan/10"
            >
              <Send className="h-3.5 w-3.5" />
              TRANSMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
