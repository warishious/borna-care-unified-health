import { Check, X } from "lucide-react";

const ROWS = [
  { old: "Separate scheduling app", neu: "Unified real-time scheduling" },
  { old: "Paper intake forms", neu: "Smart digital forms, pre-filled" },
  { old: "Manual billing & receipts", neu: "Integrated online payments" },
  { old: "Personal texts & voicemails", neu: "HIPAA-aligned clinic chat" },
  { old: "One system per branch", neu: "One dashboard, every location" },
  { old: "Disconnected communication", neu: "Every touchpoint in one thread" },
];

export function Comparison() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 size-[520px] rounded-full bg-forest/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass-elevated px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sage">
            The difference
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white">
            Six systems become
            <br />
            <span className="italic gradient-green-text">one intelligent platform</span>.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-4">
          {/* Traditional */}
          <div className="relative rounded-3xl glass-elevated p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-white/40">
                  Yesterday
                </div>
                <h3 className="mt-1 font-display text-2xl text-white/70">
                  Traditional systems
                </h3>
              </div>
              <span className="rounded-full bg-destructive/15 border border-destructive/25 px-3 py-1 text-xs font-semibold text-destructive">
                Disconnected
              </span>
            </div>
            <ul className="mt-6 space-y-2.5">
              {ROWS.map((r) => (
                <li
                  key={r.old}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-white/50 line-through decoration-destructive/40"
                >
                  <span className="grid size-6 place-items-center rounded-full bg-destructive/15 text-destructive">
                    <X className="size-3.5" />
                  </span>
                  {r.old}
                </li>
              ))}
            </ul>
          </div>

          {/* Borna Care */}
          <div className="relative overflow-hidden rounded-3xl glass-elevated p-8 shadow-elegant">
            <div className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-moss/25 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-forest/30" />
            <div className="relative flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-sage">
                  Today
                </div>
                <h3 className="mt-1 font-display text-2xl text-white">Borna Care</h3>
              </div>
              <span className="rounded-full bg-[image:var(--gradient-green)] px-3 py-1 text-xs font-semibold text-white shadow-glow-green">
                Unified
              </span>
            </div>
            <ul className="mt-6 space-y-2.5">
              {ROWS.map((r, i) => (
                <li
                  key={r.neu}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-white/[0.07] hover:border-forest/40"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="grid size-6 place-items-center rounded-full bg-[image:var(--gradient-green)] text-white">
                    <Check className="size-3.5" />
                  </span>
                  {r.neu}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
