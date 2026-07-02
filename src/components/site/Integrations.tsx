const LIVE = ["Open Dental", "Dentrix", "Eaglesoft", "Curve Dental"];
const SOON = ["Epic", "athenahealth", "NextGen", "Kareo", "DrChrono", "eClinicalWorks"];

export function Integrations() {
  return (
    <section id="integrations" className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-moss/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass-elevated px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sage">
            Integrations
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white">
            Plays beautifully with the
            <br />
            <span className="italic gradient-green-text">tools you already use</span>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {LIVE.map((name) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-2xl glass-elevated p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-forest/40 hover:shadow-elegant"
            >
              <div className="mx-auto grid size-12 place-items-center rounded-xl bg-[image:var(--gradient-green)] text-white font-display text-lg shadow-glow-green">
                {name[0]}
              </div>
              <div className="mt-3 font-semibold text-white">{name}</div>
              <div className="mt-1 text-[11px] text-moss font-medium">Live</div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-4 text-center text-xs uppercase tracking-widest text-white/40">
            Coming soon
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {SOON.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/50"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
