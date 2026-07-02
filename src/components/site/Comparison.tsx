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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-forest-deep">
            The difference
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-navy">
            Six systems become
            <br />
            <span className="italic gradient-green-text">one intelligent platform</span>.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-4">
          {/* Traditional */}
          <div className="relative rounded-3xl border border-border bg-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Yesterday
                </div>
                <h3 className="mt-1 font-display text-2xl text-navy/70">
                  Traditional systems
                </h3>
              </div>
              <span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
                Disconnected
              </span>
            </div>
            <ul className="mt-6 space-y-2.5">
              {ROWS.map((r) => (
                <li
                  key={r.old}
                  className="flex items-center gap-3 rounded-xl border border-border bg-soft px-4 py-3 text-sm text-navy/70 line-through decoration-destructive/40"
                >
                  <span className="grid size-6 place-items-center rounded-full bg-destructive/10 text-destructive">
                    <X className="size-3.5" />
                  </span>
                  {r.old}
                </li>
              ))}
            </ul>
          </div>

          {/* Borna Care */}
          <div className="relative overflow-hidden rounded-3xl border border-forest/20 bg-[image:linear-gradient(180deg,white,color-mix(in_oklab,var(--sage)_18%,white))] p-8 shadow-elegant">
            <div className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-moss/20 blur-3xl" />
            <div className="relative flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-forest-deep">
                  Today
                </div>
                <h3 className="mt-1 font-display text-2xl text-navy">Borna Care</h3>
              </div>
              <span className="rounded-full bg-[image:var(--gradient-green)] px-3 py-1 text-xs font-semibold text-white shadow-glow-green">
                Unified
              </span>
            </div>
            <ul className="mt-6 space-y-2.5">
              {ROWS.map((r, i) => (
                <li
                  key={r.neu}
                  className="flex items-center gap-3 rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm font-medium text-navy transition-all hover:-translate-y-0.5 hover:shadow-card"
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
