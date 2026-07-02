import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="resources" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-dark-bg p-10 sm:p-16 text-white shadow-elegant">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/4 size-[500px] rounded-full bg-forest/30 blur-3xl" />
            <div className="absolute -bottom-32 right-0 size-[520px] rounded-full bg-moss/25 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
          </div>

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              Ready when you are
            </div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              The practice your patients
              <br />
              <span className="italic gradient-green-text">already believe you are</span>.
            </h2>
            <p className="mt-5 max-w-xl text-white/70 text-lg">
              Bring every scheduling, form, message, payment and branch into
              one calm, connected platform. Onboarding in days — not quarters.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="https://care.borna.ai/"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[image:var(--gradient-green)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-green transition-all hover:-translate-y-0.5"
              >
                <span className="relative z-10">Book a trial</span>
                <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href="https://borna.ai/demo/"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
