"use client"

import { Mail, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  return (
    <section id="contact" className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Contact
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-3xl font-bold text-foreground">
              {"Let's Work"}{" "}
              <span className="neon-text-cyan text-neon-cyan">Together</span>
            </h3>
            <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Looking for a skilled DevOps engineer or Web3 specialist?
              I am open to new opportunities and collaborations. Let me know how I can help.
            </p>

            <div className="flex flex-col gap-4">
              <div className="glass flex items-center gap-4 rounded-xl p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon-cyan/10">
                  <Mail className="h-5 w-5 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">hello@krailo.dev</p>
                </div>
              </div>

              <div className="glass flex items-center gap-4 rounded-xl p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon-purple/10">
                  <MapPin className="h-5 w-5 text-neon-purple" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Remote / Europe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass neon-glow-cyan rounded-xl p-6"
          >
            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-cyan/40 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-cyan/40 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-cyan/40 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-neon-cyan/10 py-3 font-medium text-neon-cyan transition-all hover:bg-neon-cyan/20 neon-glow-cyan"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
