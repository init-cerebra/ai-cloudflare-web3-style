import { Terminal, Lock, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Left: Branding */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
          <Terminal className="h-3 w-3 text-neon-cyan" />
          <span>Viacheslav Krailo // Infra_OS</span>
        </div>

        {/* Center: Session info */}
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
            Ivano-Frankivsk
          </span>
          <span>EXP: 6 YRS</span>
          <span className="flex items-center gap-1.5">
            <Lock className="h-3 w-3 text-neon-cyan" />
            Encrypted
          </span>
        </div>

        {/* Right: Status */}
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-dot-pulse text-neon-cyan" />
          <span className="uppercase tracking-widest">Session Active</span>
        </div>
      </div>
    </footer>
  )
}
