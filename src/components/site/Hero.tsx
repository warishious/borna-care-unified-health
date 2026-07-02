import { Sparkles, CalendarCheck, CreditCard, MessageSquare, Bell } from "lucide-react";
import { AdminDashboardMock, FloatingCard, PatientPortalMock } from "./ProductMock";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40 pb-24 gradient-hero-bg">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 size-[520px] rounded-full bg-forest/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-0 size-[480px] rounded-full bg-moss/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass-elevated px-4 py-1.5 text-xs font-medium text-sage">
            <Sparkles className="size-3.5" />
            <span>Part of the Borna ecosystem · New for 2026</span>
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-white">
            Patient engagement software
            <br />
            your clinic{" "}
            <span className="gradient-green-text italic">actually deserves</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
            Scheduling, digital forms, secure messaging, online payments and
            multi-branch operations — unified in one intelligent platform your
            patients and reception team will love.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://care.borna.ai/"
              className="group relative inline-flex overflow-hidden rounded-full bg-[image:var(--gradient-green)] px-7 py-3.5 text-sm font-semibold text-white shadow-elegant transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green"
            >
              <span className="relative z-10">Book a trial</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="https://borna.ai/demo/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
            >
              Book a demo
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-moss animate-pulse" /> HIPAA-aligned
            </span>
            <span>•</span>
            <span>No credit card required</span>
            <span>•</span>
            <span>Onboarding in days</span>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative mt-20">
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-8 rounded-[3rem] bg-[image:var(--gradient-green)] opacity-10 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-12 items-center gap-6">
            {/* Patient */}
            <div className="lg:col-span-6 lg:col-start-1 animate-float">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-semibold text-forest-deep shadow-card">
                <span className="size-1.5 rounded-full bg-moss" />
                Patient portal
              </div>
              <PatientPortalMock />
            </div>

            {/* Admin */}
            <div
              className="lg:col-span-6 lg:col-start-7 lg:-mt-24 animate-float-slow"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-navy px-3 py-1 text-[11px] font-semibold text-white shadow-card">
                <span className="size-1.5 rounded-full bg-sage" />
                Practice dashboard
              </div>
              <AdminDashboardMock />
            </div>

            {/* Floating notifications */}
            <FloatingCard
              icon={CalendarCheck}
              title="Appointment confirmed"
              subtitle="Layla A. · Thu 10:30 AM"
              accent="green"
              className="hidden md:flex absolute -left-4 top-40 w-64 animate-float"
              style={{ animationDelay: "0.4s" }}
            />
            <FloatingCard
              icon={CreditCard}
              title="Payment received"
              subtitle="$180.00 · Downtown"
              accent="white"
              className="hidden md:flex absolute right-2 top-4 w-60 animate-float-slow"
              style={{ animationDelay: "0.8s" }}
            />
            <FloatingCard
              icon={MessageSquare}
              title="New message from Dr. Rahimi"
              subtitle="Your results are ready"
              accent="navy"
              className="hidden lg:flex absolute -left-6 bottom-8 w-72 animate-float"
              style={{ animationDelay: "1.6s" }}
            />
            <FloatingCard
              icon={Bell}
              title="Reminder sent to 42 patients"
              subtitle="Automation · Uptown branch"
              accent="white"
              className="hidden lg:flex absolute -right-4 bottom-24 w-72 animate-float-slow"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
