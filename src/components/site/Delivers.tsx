import { useEffect, useRef, useState } from "react";
import {
  Clock,
  Sparkles,
  CalendarCheck,
  Wallet,
  ArrowUpRight,
} from "lucide-react";

type Benefit = {
  id: string;
  icon: typeof Clock;
  title: string;
  copy: string;
  metric: number;
  suffix: string;
  metricLabel: string;
  accent: string;
};

const BENEFITS: Benefit[] = [
  {
    id: "workload",
    icon: Clock,
    title: "Reduce administrative workload",
    copy: "Eliminate manual scheduling and paper forms.",
    metric: 62,
    suffix: "%",
    metricLabel: "less admin time",
    accent: "from-forest to-moss",
  },
  {
    id: "experience",
    icon: Sparkles,
    title: "Improve patient experience",
    copy: "Self-service booking and digital communications.",
    metric: 4.9,
    suffix: "/5",
    metricLabel: "patient satisfaction",
    accent: "from-moss to-sage",
  },
  {
    id: "efficiency",
    icon: CalendarCheck,
    title: "Increase appointment efficiency",
    copy: "Reduce no-shows with automated reminders.",
    metric: 38,
    suffix: "%",
    metricLabel: "fewer no-shows",
    accent: "from-evergreen to-forest",
  },
  {
    id: "revenue",
    icon: Wallet,
    title: "Recover more revenue",
    copy: "Frictionless online payment requests.",
    metric: 22,
    suffix: "%",
    metricLabel: "faster collections",
    accent: "from-forest to-evergreen",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const isFloat = target % 1 !== 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1600;
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(target * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setVal(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {isFloat ? val.toFixed(1) : Math.round(val)}
      {suffix}
    </span>
  );
}

export function Delivers() {
  return (
    <section id="delivers" className="relative overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[900px] rounded-full bg-forest/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-[520px] rounded-full bg-moss/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass-elevated px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sage">
            Outcomes
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white">
            What Borna Care delivers
            <br />
            <span className="italic gradient-green-text">for your clinic</span>.
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Measurable outcomes across the metrics that matter most —
            operations, patient experience, efficiency and revenue.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {BENEFITS.map((b, i) => (
            <article
              key={b.id}
              className="group relative overflow-hidden rounded-3xl glass-elevated p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Ambient gradient glow */}
              <div
                className={`pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-gradient-to-br ${b.accent} opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-40`}
              />
              {/* Floating soft badge */}
              <div className="pointer-events-none absolute right-6 top-6 rounded-full glass-dark px-2.5 py-1 text-[10px] font-semibold text-sage flex items-center gap-1 opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <ArrowUpRight className="size-3" /> impact
              </div>

              <div className="relative">
                <div
                  className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${b.accent} text-white shadow-glow-green`}
                >
                  <b.icon className="size-5" />
                </div>

                <h3 className="mt-6 font-display text-2xl sm:text-3xl text-white leading-tight">
                  {b.title}
                </h3>
                <p className="mt-2 text-white/60 leading-relaxed">{b.copy}</p>

                {/* Animated counter */}
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <div className="font-display text-5xl sm:text-6xl gradient-green-text leading-none">
                      <AnimatedCounter target={b.metric} suffix={b.suffix} />
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-widest text-white/50">
                      {b.metricLabel}
                    </div>
                  </div>

                  {/* Micro sparkline */}
                  <svg
                    width="120"
                    height="40"
                    viewBox="0 0 120 40"
                    className="text-moss opacity-70 group-hover:opacity-100 transition-opacity"
                  >
                    <defs>
                      <linearGradient id={`sp-${b.id}`} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 32 L15 28 L30 30 L45 22 L60 24 L75 16 L90 18 L105 10 L120 6 L120 40 L0 40 Z"
                      fill={`url(#sp-${b.id})`}
                    />
                    <path
                      d="M0 32 L15 28 L30 30 L45 22 L60 24 L75 16 L90 18 L105 10 L120 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom hairline */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-forest/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
