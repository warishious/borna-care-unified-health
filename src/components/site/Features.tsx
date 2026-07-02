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
import { FEATURE_MOCK_REGISTRY } from "./FeatureMocks";

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
    <section className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-40 right-0 size-[520px] rounded-full bg-forest/10 blur-3xl" />
        <div className="absolute bottom-20 left-0 size-[420px] rounded-full bg-moss/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-elevated px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sage">
            The solution
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white">
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
                    className={`shrink-0 lg:shrink flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-forest/40 bg-white/[0.06] backdrop-blur shadow-card text-white"
                        : "border-transparent text-white/60 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`grid size-8 place-items-center rounded-lg transition-all ${
                        isActive
                          ? "bg-[image:var(--gradient-green)] text-white shadow-glow-green"
                          : "bg-white/[0.06] text-sage"
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
            className="animate-fade-up rounded-3xl glass-elevated p-8 sm:p-10 shadow-elegant"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-destructive">
                  The problem
                </div>
                <p className="mt-2 text-lg leading-relaxed text-white/70 italic">
                  "{current.problem}"
                </p>

                <div className="mt-8 h-px bg-white/10" />

                <div className="mt-8 text-[11px] font-semibold uppercase tracking-widest text-sage">
                  With Borna Care
                </div>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl leading-tight text-white">
                  {current.title}
                </h3>
                <p className="mt-3 text-white/60 leading-relaxed">
                  {current.copy}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {current.stats.map((s) => (
                    <div
                      key={s.v}
                      className="rounded-xl bg-white/[0.04] border border-white/10 p-4"
                    >
                      <div className="font-display text-3xl gradient-green-text">
                        {s.k}
                      </div>
                      <div className="text-xs text-white/50">{s.v}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://borna.ai/demo/"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sage hover:text-white hover:gap-2.5 transition-all"
                >
                  See it live in a demo <ArrowRight className="size-4" />
                </a>
              </div>

              {/* Per-feature unique mock */}
              <div className="relative">
                <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-[image:var(--gradient-green)] opacity-20 blur-3xl" />
                <div className="relative">
                  {(() => {
                    const Mock = FEATURE_MOCK_REGISTRY[current.id];
                    return Mock ? <Mock /> : null;
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
