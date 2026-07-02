import { Building2, Users, BarChart3, Stethoscope } from "lucide-react";

export function MultiBranch() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-32 gradient-dark-bg text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 size-96 rounded-full bg-forest/25 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 size-[500px] rounded-full bg-moss/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
            Multi-branch
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Manage one clinic — or
            <br />
            <span className="italic gradient-green-text">an entire healthcare network</span>.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Central visibility. Local flexibility. Shared providers, patients
            and reporting — under one intelligent roof.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-10">
          {/* Branches */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "Downtown", city: "Toronto", dot: "var(--forest)" },
              { name: "Uptown", city: "Toronto", dot: "var(--moss)" },
              { name: "West End", city: "Toronto", dot: "var(--evergreen)" },
              { name: "Bay Area", city: "Vancouver", dot: "var(--sage)" },
              { name: "Midtown", city: "Calgary", dot: "var(--forest)" },
              { name: "Riverside", city: "Ottawa", dot: "var(--moss)" },
            ].map((b, i) => (
              <div
                key={b.name}
                className="glass-dark rounded-2xl p-4 animate-float"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="flex items-center gap-2">
                  <Building2 className="size-4 text-sage" />
                  <span
                    className="size-1.5 rounded-full animate-pulse"
                    style={{ background: b.dot }}
                  />
                </div>
                <div className="mt-3 text-sm font-semibold">{b.name}</div>
                <div className="text-[11px] text-white/60">{b.city}</div>
              </div>
            ))}
          </div>

          {/* Connector */}
          <div className="hidden lg:flex flex-col items-center">
            <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="120" y2="0">
                  <stop offset="0%" stopColor="var(--sage)" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="var(--moss)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--forest)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {[30, 90, 150].map((y) => (
                <path
                  key={y}
                  d={`M0 ${y} C 40 ${y} 80 100 120 100`}
                  stroke="url(#grad)"
                  strokeWidth="1.5"
                  fill="none"
                />
              ))}
            </svg>
          </div>

          {/* Central dashboard */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[image:var(--gradient-green)] opacity-30 blur-3xl" />
            <div className="relative rounded-3xl glass-dark p-6 shadow-elegant">
              <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-widest text-white/60">
                  Central dashboard
                </div>
                <div className="flex items-center gap-1 text-[11px] text-sage">
                  <span className="size-1.5 rounded-full bg-sage animate-pulse" />
                  Live · 6 branches
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { icon: BarChart3, label: "Revenue", value: "$142k" },
                  { icon: Users, label: "Patients", value: "8,214" },
                  { icon: Stethoscope, label: "Providers", value: "38" },
                ].map((k) => (
                  <div
                    key={k.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <k.icon className="size-4 text-sage" />
                    <div className="mt-2 font-display text-xl">{k.value}</div>
                    <div className="text-[10px] text-white/60">{k.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2">
                {[
                  "Shared providers across branches",
                  "Shared patient records & history",
                  "Unified reporting & analytics",
                  "Central policies, local schedules",
                ].map((row) => (
                  <div
                    key={row}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
                  >
                    <span className="size-1.5 rounded-full bg-moss" />
                    {row}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
