import { useState } from "react";
import {
  Calendar,
  FileText,
  MessageSquare,
  CreditCard,
  Stethoscope,
  ClipboardList,
  Building2,
  Users,
  History,
  ArrowRight,
} from "lucide-react";

const FEATURES = [
  {
    id: "scheduling",
    icon: Calendar,
    problem: "Patients call at 8pm. Nobody answers. They book with a competitor.",
    title: "Scheduling that never sleeps",
    copy: "Real-time availability across providers, services and branches. Patients self-book in under 30 seconds — including reschedules and cancellations.",
    stats: [
      { k: "3x", v: "faster booking" },
      { k: "24/7", v: "availability" },
    ],
  },
  {
    id: "forms",
    icon: FileText,
    problem: "Every visit starts with a clipboard, illegible handwriting and a data-entry queue.",
    title: "Digital forms, completed before arrival",
    copy: "Send smart intake, consent and medical history forms automatically. Signed, timestamped and attached to the chart before the patient walks in.",
    stats: [
      { k: "-14 min", v: "per check-in" },
      { k: "100%", v: "legible" },
    ],
  },
  {
    id: "messaging",
    icon: MessageSquare,
    problem: "Patients text personal numbers, results get lost in email, HIPAA gets nervous.",
    title: "Secure clinic chat",
    copy: "Two-way messaging between patients and providers with full audit trails, attachments and templated replies. Compliant by design.",
    stats: [
      { k: "< 5 min", v: "average reply" },
      { k: "0", v: "PHI leaks" },
    ],
  },
  {
    id: "payments",
    icon: CreditCard,
    problem: "Invoices in email, receipts on paper, past-due balances aging quietly in the corner.",
    title: "Integrated online payments",
    copy: "Card on file, family accounts, itemized invoices and instant receipts. Reconciled to appointments and providers automatically.",
    stats: [
      { k: "+22%", v: "faster collections" },
      { k: "1-tap", v: "checkout" },
    ],
  },
  {
    id: "providers",
    icon: Stethoscope,
    problem: "Providers and services live in a spreadsheet nobody has permission to edit.",
    title: "Providers & services, structured",
    copy: "Model every provider, service, room and duration once. Availability, pricing and booking rules cascade everywhere instantly.",
    stats: [
      { k: "1 source", v: "of truth" },
      { k: "∞", v: "configurations" },
    ],
  },
  {
    id: "appointments",
    icon: ClipboardList,
    problem: "The day starts as a paper schedule and ends as a puzzle.",
    title: "Appointment management",
    copy: "Drag-and-drop schedules, smart reminders, waitlists and no-show recovery — with a real-time view of every chair and every provider.",
    stats: [
      { k: "-38%", v: "no-shows" },
      { k: "Live", v: "waitlist" },
    ],
  },
  {
    id: "branches",
    icon: Building2,
    problem: "Each location is a silo with its own logins, reports and rules.",
    title: "Branch management",
    copy: "Operate one clinic or an entire network from one dashboard. Central policies, local flexibility, unified reporting.",
    stats: [
      { k: "1", v: "dashboard" },
      { k: "N", v: "branches" },
    ],
  },
  {
    id: "family",
    icon: Users,
    problem: "A parent books for three kids by making three phone calls.",
    title: "Family & dependents",
    copy: "One account, many patients. Manage bookings, forms and payments for the whole family from a single profile.",
    stats: [
      { k: "1 login", v: "whole family" },
      { k: "Shared", v: "billing" },
    ],
  },
  {
    id: "history",
    icon: History,
    problem: "Patients ask for their last visit and nobody can find it in under five minutes.",
    title: "Complete visit history",
    copy: "Every visit, form, message, invoice and note — searchable, exportable and always at the patient's fingertips.",
    stats: [
      { k: "Instant", v: "search" },
      { k: "Full", v: "audit trail" },
    ],
  },
];

export function Features() {
  const [active, setActive] = useState(FEATURES[0].id);
  const current = FEATURES.find((f) => f.id === active)!;

  return (
    <section className="relative py-28 sm:py-32 bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-forest-deep shadow-card">
            The solution
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-navy">
            Every feature starts with
            <br />
            <span className="italic gradient-green-text">a real clinic problem</span>.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Feature nav */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {FEATURES.map((f) => {
                const isActive = f.id === active;
                return (
                  <button
                    key={f.id}
                    onClick={() => setActive(f.id)}
                    className={`shrink-0 lg:shrink flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left transition-all ${
                      isActive
                        ? "border-forest/40 bg-white shadow-card text-navy"
                        : "border-transparent text-navy/70 hover:bg-white/70"
                    }`}
                  >
                    <span
                      className={`grid size-8 place-items-center rounded-lg ${
                        isActive
                          ? "bg-[image:var(--gradient-green)] text-white"
                          : "bg-secondary text-forest-deep"
                      }`}
                    >
                      <f.icon className="size-4" />
                    </span>
                    <span className="text-sm font-medium whitespace-nowrap lg:whitespace-normal">
                      {f.title.split(",")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active content */}
          <div
            key={current.id}
            className="animate-fade-up rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-elegant"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-destructive">
                  The problem
                </div>
                <p className="mt-2 text-lg leading-relaxed text-navy/70 italic">
                  "{current.problem}"
                </p>

                <div className="mt-8 h-px bg-border" />

                <div className="mt-8 text-[11px] font-semibold uppercase tracking-widest text-forest-deep">
                  With Borna Care
                </div>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl leading-tight text-navy">
                  {current.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {current.copy}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {current.stats.map((s) => (
                    <div
                      key={s.v}
                      className="rounded-xl bg-secondary p-4"
                    >
                      <div className="font-display text-3xl text-forest-deep">
                        {s.k}
                      </div>
                      <div className="text-xs text-muted-foreground">{s.v}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://borna.ai/demo/"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:gap-2.5 transition-all"
                >
                  See it live in a demo <ArrowRight className="size-4" />
                </a>
              </div>

              {/* Visual */}
              <div className="relative aspect-[4/3] rounded-2xl bg-[image:var(--gradient-hero)] p-6 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--moss)_30%,transparent),transparent_60%)]" />
                <div className="relative flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-xl bg-[image:var(--gradient-green)] text-white shadow-glow-green">
                    <current.icon className="size-6" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      Live in dashboard
                    </div>
                    <div className="font-display text-xl text-navy">
                      {current.title.split(",")[0]}
                    </div>
                  </div>
                </div>

                <div className="relative mt-6 space-y-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="glass rounded-xl px-3 py-2.5 flex items-center gap-3"
                    >
                      <span className="size-2 rounded-full bg-moss animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                      <div className="h-2 flex-1 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[image:var(--gradient-green)]"
                          style={{ width: `${45 + i * 15}%` }}
                        />
                      </div>
                      <div className="text-[10px] font-semibold text-navy w-8 text-right">
                        {45 + i * 15}%
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pointer-events-none absolute -bottom-10 -right-10 size-40 rounded-full bg-forest/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
