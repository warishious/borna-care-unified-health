import {
  Calendar,
  FileText,
  MessageSquare,
  CreditCard,
  Users,
  History,
  Bell,
  Stethoscope,
  Layers,
  Building2,
  ClipboardList,
  UserCog,
} from "lucide-react";
import { AdminDashboardMock, PatientPortalMock } from "./ProductMock";

const PATIENT = [
  { icon: Calendar, label: "Online scheduling" },
  { icon: FileText, label: "Digital forms" },
  { icon: MessageSquare, label: "Secure messaging" },
  { icon: CreditCard, label: "Online payments" },
  { icon: Users, label: "Family & dependents" },
  { icon: History, label: "Visit history" },
];

const ADMIN = [
  { icon: Calendar, label: "Appointment management" },
  { icon: Stethoscope, label: "Providers & services" },
  { icon: Building2, label: "Branch management" },
  { icon: ClipboardList, label: "Forms management" },
  { icon: CreditCard, label: "Payment management" },
  { icon: UserCog, label: "Patient records" },
];

export function TwoExperiences() {
  return (
    <section id="features" className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[720px] rounded-full bg-forest/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass-elevated px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sage">
            <Layers className="size-3.5" /> One platform
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white">
            One platform.
            <br />
            <span className="italic gradient-green-text">Two experiences</span>, in perfect sync.
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Every action a patient takes updates the practice dashboard in
            real time. Every schedule change flows straight to the patient.
          </p>
        </div>

        <div className="relative mt-20 grid lg:grid-cols-2 gap-10">
          {/* Vertical sync line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-10 bottom-10 hidden lg:block w-px bg-gradient-to-b from-transparent via-forest/60 to-transparent"
          >
            <span className="absolute left-1/2 top-1/3 -translate-x-1/2 grid size-6 place-items-center rounded-full glass-elevated shadow-glow-green animate-pulse-ring">
              <span className="size-2 rounded-full bg-moss" />
            </span>
            <span className="absolute left-1/2 top-2/3 -translate-x-1/2 grid size-6 place-items-center rounded-full glass-elevated shadow-glow-green animate-pulse-ring">
              <span className="size-2 rounded-full bg-forest" />
            </span>
          </div>

          {/* Patient side */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-green)] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white shadow-glow-green">
              For patients
            </div>
            <h3 className="mt-4 font-display text-3xl text-white">Patient portal</h3>
            <p className="mt-2 text-white/60">
              A calm, modern hub where patients book, pay, message and manage
              their family — no phone calls, no paper.
            </p>
            <div className="mt-6">
              <PatientPortalMock />
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {PATIENT.map((f) => (
                <li
                  key={f.label}
                  className="flex items-center gap-2 rounded-xl glass-elevated px-3 py-2.5 text-sm text-white transition-all hover:border-forest/40 hover:-translate-y-0.5"
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-white/[0.06] text-sage">
                    <f.icon className="size-4" />
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Admin side */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
              For clinics
            </div>
            <h3 className="mt-4 font-display text-3xl text-white">Practice dashboard</h3>
            <p className="mt-2 text-white/60">
              A single command center for schedules, providers, payments and
              every branch — with live visibility across the network.
            </p>
            <div className="mt-6">
              <AdminDashboardMock />
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {ADMIN.map((f) => (
                <li
                  key={f.label}
                  className="flex items-center gap-2 rounded-xl glass-elevated px-3 py-2.5 text-sm text-white transition-all hover:border-forest/40 hover:-translate-y-0.5"
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-white/[0.06] text-sage">
                    <f.icon className="size-4" />
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full glass-elevated px-3 py-1 text-[11px] font-medium text-sage">
              <Bell className="size-3" /> Real-time sync across every device
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
