import { Building2, Users, Calendar, CreditCard, Stethoscope, Network } from "lucide-react";

const BRANCHES = [
  {
    key: "A",
    name: "Branch A",
    city: "Downtown Toronto",
    accent: "var(--forest)",
    stats: { patients: 1240, providers: 8, appts: 42, revenue: "$48.2k" },
  },
  {
    key: "B",
    name: "Branch B",
    city: "Uptown Toronto",
    accent: "var(--moss)",
    stats: { patients: 890, providers: 5, appts: 28, revenue: "$31.7k" },
  },
  {
    key: "C",
    name: "Branch C",
    city: "Airport West",
    accent: "var(--sage)",
    stats: { patients: 512, providers: 3, appts: 19, revenue: "$21.4k" },
  },
] as const;

const BRANCH_ITEMS = [
  { icon: Users, label: "Patients" },
  { icon: Stethoscope, label: "Providers" },
  { icon: Calendar, label: "Appointments" },
  { icon: CreditCard, label: "Payments" },
];

export function MultiBranch() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 size-96 rounded-full bg-forest/20 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 size-[500px] rounded-full bg-moss/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-elevated px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sage">
            <Network className="size-3.5" /> Multi-branch
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white">
            Centralized administration.
            <br />
            <span className="italic gradient-green-text">Independent branch data</span>.
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Create and manage multiple branches from one platform, while each
            branch keeps its own patients, providers, appointments and payments —
            organized, isolated and fully under your control.
          </p>
        </div>

        {/* Hierarchy tree */}
        <div className="relative mt-20">
          {/* Root */}
          <div className="mx-auto flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-[image:var(--gradient-green)] opacity-30 blur-3xl animate-glow-pulse" />
              <div className="relative rounded-2xl glass-elevated px-6 py-4 shadow-elegant flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-[image:var(--gradient-green)] text-white shadow-glow-green">
                  <Building2 className="size-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-sage">
                    Root
                  </div>
                  <div className="font-display text-xl text-white">Borna Care Platform</div>
                </div>
                <span className="ml-4 inline-flex items-center gap-1 text-[10px] font-semibold text-sage">
                  <span className="size-1.5 rounded-full bg-moss animate-pulse" />
                  Central console
                </span>
              </div>
            </div>
          </div>

          {/* Connector lines */}
          <svg
            className="hidden md:block absolute left-0 right-0 mx-auto"
            style={{ top: 90, height: 60 }}
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            width="100%"
            height="60"
          >
            <defs>
              <linearGradient id="branchGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--moss)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--moss)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M500 0 L500 25 L166 25 L166 60 M500 25 L500 60 M500 25 L834 25 L834 60"
              stroke="url(#branchGrad)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>

          {/* Branches grid */}
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
            {BRANCHES.map((b, i) => (
              <div
                key={b.key}
                className="group relative"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: b.accent }}
                />
                <div className="relative rounded-2xl glass-elevated p-5 shadow-card transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-elegant">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="grid size-8 place-items-center rounded-lg text-white text-xs font-bold"
                        style={{ background: b.accent }}
                      >
                        {b.key}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{b.name}</div>
                        <div className="text-[10px] text-white/50">{b.city}</div>
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white/80"
                      style={{
                        background: "color-mix(in oklab, white 6%, transparent)",
                        border: "1px solid color-mix(in oklab, white 10%, transparent)",
                      }}
                    >
                      <span
                        className="size-1.5 rounded-full animate-pulse"
                        style={{ background: b.accent }}
                      />
                      Independent
                    </span>
                  </div>

                  {/* Branch items */}
                  <div className="mt-4 space-y-1.5">
                    {BRANCH_ITEMS.map((it, j) => (
                      <div
                        key={it.label}
                        className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-[11px] text-white/80 transition-all group-hover:bg-white/[0.06]"
                        style={{ transitionDelay: `${j * 60}ms` }}
                      >
                        <span className="grid size-6 place-items-center rounded-md bg-white/[0.06] text-sage">
                          <it.icon className="size-3.5" />
                        </span>
                        <span className="flex-1">{it.label}</span>
                        <span className="text-white/40 font-mono text-[10px]">
                          {it.label === "Patients"
                            ? b.stats.patients
                            : it.label === "Providers"
                              ? b.stats.providers
                              : it.label === "Appointments"
                                ? b.stats.appts
                                : b.stats.revenue}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Isolation notice */}
                  <div className="mt-3 text-[10px] text-white/40 flex items-center gap-1.5">
                    <span className="size-1 rounded-full bg-white/30" />
                    Data isolated to this branch
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom clarifier */}
          <div className="mt-10 mx-auto max-w-2xl text-center text-sm text-white/50">
            <span className="text-sage font-medium">One place to administer</span>
            {" · "}
            <span>every branch stays its own operation.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
