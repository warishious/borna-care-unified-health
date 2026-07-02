import { Calendar, FileText, Bell, Building2, CreditCard, Heart } from "lucide-react";

const STEPS = [
  { icon: Calendar, title: "Book appointment", copy: "Real-time availability across every provider and branch." },
  { icon: FileText, title: "Complete forms", copy: "Smart digital intake, signed and stored before arrival." },
  { icon: Bell, title: "Receive confirmation", copy: "Automated reminders across email, SMS and portal." },
  { icon: Building2, title: "Visit clinic", copy: "Check in with a tap. Reception already has the file open." },
  { icon: CreditCard, title: "Pay online", copy: "Card on file, instant receipts, family accounts included." },
  { icon: Heart, title: "Receive follow-up", copy: "Secure chat, care instructions and next visit — automatic." },
];

export function Journey() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-32 gradient-hero-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-elevated px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sage">
            The patient journey
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white">
            One continuous story,
            <br />
            <span className="gradient-green-text italic">from booking to follow-up</span>.
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Connecting line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-11 hidden lg:block h-px bg-gradient-to-r from-transparent via-forest/50 to-transparent"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="group relative"
              >
                <div className="relative mx-auto grid size-[88px] place-items-center rounded-2xl glass-elevated shadow-card transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="grid size-14 place-items-center rounded-xl bg-[image:var(--gradient-green)] text-white shadow-glow-green">
                    <s.icon className="size-6" />
                  </div>
                  <div className="absolute -top-3 -left-3 grid size-7 place-items-center rounded-full bg-white text-[11px] font-semibold text-navy shadow-card">
                    {i + 1}
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="font-display text-xl text-white">{s.title}</div>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">
                    {s.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
