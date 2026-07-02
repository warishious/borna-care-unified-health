import {
  Calendar,
  MessageSquare,
  CreditCard,
  FileText,
  Users,
  Building2,
  Activity,
  Bell,
  CheckCircle2,
  Clock,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Patient portal mockup                                                     */
/* -------------------------------------------------------------------------- */
export function PatientPortalMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-elegant ${className}`}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="size-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="size-2.5 rounded-full bg-[#28c840]/70" />
        <div className="ml-4 flex-1 rounded-md bg-secondary/70 px-3 py-1 text-[10px] font-medium text-muted-foreground">
          care.borna.ai / patient
        </div>
      </div>

      <div className="grid grid-cols-[180px_1fr]">
        {/* Sidebar */}
        <aside className="hidden sm:flex flex-col gap-1 border-r border-border/60 bg-soft/60 p-3 text-xs">
          <div className="mb-2 flex items-center gap-2 rounded-lg px-2 py-1.5">
            <div className="grid size-7 place-items-center rounded-full bg-[image:var(--gradient-green)] text-[10px] font-semibold text-white">
              LA
            </div>
            <div>
              <div className="font-semibold text-navy">Layla A.</div>
              <div className="text-[10px] text-muted-foreground">Patient</div>
            </div>
          </div>
          {[
            { icon: Activity, label: "Overview", active: true },
            { icon: Calendar, label: "Appointments" },
            { icon: FileText, label: "Forms" },
            { icon: MessageSquare, label: "Messages" },
            { icon: CreditCard, label: "Payments" },
            { icon: Users, label: "Family" },
          ].map((i) => (
            <div
              key={i.label}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
                i.active
                  ? "bg-white text-forest-deep shadow-sm"
                  : "text-navy/70"
              }`}
            >
              <i.icon className="size-3.5" />
              <span className="font-medium">{i.label}</span>
            </div>
          ))}
        </aside>

        {/* Main */}
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Good morning
              </div>
              <div className="font-display text-xl text-navy">Welcome back, Layla</div>
            </div>
            <div className="hidden sm:flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[10px] text-navy/70">
              <Bell className="size-3" /> 2 new
            </div>
          </div>

          {/* Next appointment card */}
          <div className="relative overflow-hidden rounded-2xl bg-[image:var(--gradient-green)] p-4 text-white shadow-glow-green">
            <div className="text-[10px] uppercase tracking-widest opacity-80">
              Next appointment
            </div>
            <div className="mt-1 font-display text-lg leading-tight">
              Dr. Amir Rahimi · Dental cleaning
            </div>
            <div className="mt-2 flex items-center gap-3 text-[11px] opacity-90">
              <span className="flex items-center gap-1">
                <Calendar className="size-3" /> Thu, Nov 14
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3" /> 10:30 AM
              </span>
              <span className="flex items-center gap-1">
                <Building2 className="size-3" /> Downtown Branch
              </span>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold text-forest-deep">
                Check in
              </button>
              <button className="rounded-full border border-white/40 px-3 py-1 text-[10px] font-medium">
                Reschedule
              </button>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-white/10 blur-2xl" />
          </div>

          {/* Two mini cards */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-border/60 bg-white p-3">
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <FileText className="size-3" /> Intake form
              </div>
              <div className="mt-1 text-xs font-semibold text-navy">
                Medical history
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-3/4 rounded-full bg-[image:var(--gradient-green)]" />
              </div>
              <div className="mt-1 text-[10px] text-muted-foreground">75% complete</div>
            </div>
            <div className="rounded-xl border border-border/60 bg-white p-3">
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <CreditCard className="size-3" /> Balance
              </div>
              <div className="mt-1 text-xs font-semibold text-navy">$180.00</div>
              <button className="mt-2 w-full rounded-md bg-navy py-1 text-[10px] font-semibold text-white">
                Pay now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Admin dashboard mockup                                                    */
/* -------------------------------------------------------------------------- */
export function AdminDashboardMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-elegant ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="size-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="size-2.5 rounded-full bg-[#28c840]/70" />
        <div className="ml-4 flex-1 rounded-md bg-secondary/70 px-3 py-1 text-[10px] font-medium text-muted-foreground">
          care.borna.ai / admin
        </div>
      </div>

      <div className="grid grid-cols-[56px_1fr]">
        <aside className="flex flex-col items-center gap-2 border-r border-border/60 bg-navy py-4 text-white/70">
          {[Activity, Calendar, Users, FileText, CreditCard, Building2].map(
            (Icon, i) => (
              <div
                key={i}
                className={`grid size-9 place-items-center rounded-xl ${
                  i === 0
                    ? "bg-[image:var(--gradient-green)] text-white"
                    : "hover:bg-white/10"
                }`}
              >
                <Icon className="size-4" />
              </div>
            ),
          )}
        </aside>

        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Practice overview
              </div>
              <div className="font-display text-xl text-navy">Today · 4 branches</div>
            </div>
            <div className="flex gap-1">
              <div className="rounded-full bg-secondary px-2 py-0.5 text-[10px] text-navy/70">
                Live
              </div>
              <div className="size-6 rounded-full bg-[image:var(--gradient-green)] ring-2 ring-white" />
              <div className="-ml-2 size-6 rounded-full bg-navy text-[10px] font-semibold text-white ring-2 ring-white grid place-items-center">
                AR
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Appointments", value: "142", delta: "+12%" },
              { label: "Revenue", value: "$18.4k", delta: "+8%" },
              { label: "New patients", value: "27", delta: "+3" },
              { label: "Fill rate", value: "94%", delta: "+2%" },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded-xl border border-border/60 bg-white p-2.5"
              >
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground">
                  {k.label}
                </div>
                <div className="mt-0.5 font-display text-lg text-navy">{k.value}</div>
                <div className="text-[9px] font-semibold text-moss">{k.delta}</div>
              </div>
            ))}
          </div>

          {/* Schedule grid */}
          <div className="rounded-xl border border-border/60 bg-white p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-xs font-semibold text-navy">Provider schedule</div>
              <div className="text-[10px] text-muted-foreground">Nov 14</div>
            </div>
            <div className="space-y-1.5">
              {[
                { name: "Dr. Rahimi", branch: "Downtown", w: "80%", c: "var(--forest)" },
                { name: "Dr. Chen", branch: "Uptown", w: "62%", c: "var(--moss)" },
                { name: "Dr. Patel", branch: "West End", w: "45%", c: "var(--evergreen)" },
                { name: "Dr. Nasser", branch: "Bay Area", w: "90%", c: "var(--forest-deep)" },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-2">
                  <div className="w-20 shrink-0 text-[10px] font-medium text-navy">
                    {p.name}
                  </div>
                  <div className="w-16 shrink-0 text-[9px] text-muted-foreground">
                    {p.branch}
                  </div>
                  <div className="flex-1 h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full"
                      style={{ width: p.w, background: p.c }}
                    />
                  </div>
                  <div className="w-8 text-right text-[10px] font-semibold text-navy">
                    {p.w}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Floating notification cards                                               */
/* -------------------------------------------------------------------------- */
export function FloatingCard({
  icon: Icon,
  title,
  subtitle,
  accent = "green",
  className = "",
  style,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  accent?: "green" | "navy" | "white";
  className?: string;
  style?: React.CSSProperties;
}) {
  const accentStyles =
    accent === "green"
      ? "bg-[image:var(--gradient-green)] text-white"
      : accent === "navy"
        ? "bg-navy text-white"
        : "bg-white text-navy";
  return (
    <div
      className={`glass shadow-elegant rounded-2xl p-3 pr-4 flex items-center gap-3 ${className}`}
      style={style}
    >
      <div className={`grid size-9 place-items-center rounded-xl ${accentStyles}`}>
        <Icon className="size-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold text-navy leading-tight">{title}</div>
        <div className="text-[10px] text-muted-foreground leading-tight">{subtitle}</div>
      </div>
      <CheckCircle2 className="size-3.5 text-moss shrink-0" />
    </div>
  );
}
