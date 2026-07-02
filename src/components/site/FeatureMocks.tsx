import {
  Calendar,
  Check,
  Clock,
  CreditCard,
  FileText,
  History,
  MessageSquare,
  Search,
  Stethoscope,
  Users,
  Building2,
  ClipboardList,
  MapPin,
  Send,
  Paperclip,
} from "lucide-react";

/**
 * A shared "browser chrome" frame for feature mockups.
 * Keeps the light product surface consistent across features while the
 * surrounding site is dark.
 */
function MockFrame({
  title,
  children,
  accent = "green",
}: {
  title: string;
  children: React.ReactNode;
  accent?: "green" | "navy";
}) {
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant border border-white/10 bg-white">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200/70 bg-gradient-to-b from-slate-50 to-white">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-rose-300/70" />
          <span className="size-2.5 rounded-full bg-amber-300/70" />
          <span className="size-2.5 rounded-full bg-emerald-300/70" />
        </div>
        <div className="text-[10px] font-medium text-slate-500 tracking-wide">
          {title}
        </div>
        <div
          className={`size-2 rounded-full ${
            accent === "green" ? "bg-moss" : "bg-navy"
          } animate-pulse`}
        />
      </div>
      <div className="relative h-[calc(100%-40px)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

/* ---------------- SCHEDULING ---------------- */
export function SchedulingMock() {
  const slots = ["8:00", "9:15", "10:30", "11:45", "1:00", "2:15", "3:30", "4:45"];
  return (
    <MockFrame title="care.borna.ai · Booking">
      <div className="p-4 h-full grid grid-cols-[1fr_1.2fr] gap-3">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
            October
          </div>
          <div className="mt-2 grid grid-cols-7 gap-1 text-[10px]">
            {Array.from({ length: 28 }).map((_, i) => {
              const active = i === 14;
              const dot = [10, 14, 18, 22].includes(i);
              return (
                <div
                  key={i}
                  className={`aspect-square grid place-items-center rounded-md ${
                    active
                      ? "bg-[image:var(--gradient-green)] text-white font-semibold"
                      : "text-slate-600 hover:bg-white"
                  }`}
                >
                  <span>{i + 1}</span>
                  {dot && !active && (
                    <span className="absolute translate-y-2.5 size-1 rounded-full bg-moss" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
            Thu · Available
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5 flex-1 overflow-hidden">
            {slots.map((s, i) => (
              <div
                key={s}
                className={`rounded-lg border px-2 py-1.5 text-[11px] font-medium flex items-center justify-between ${
                  i === 2
                    ? "border-forest bg-[image:var(--gradient-green)] text-white shadow-glow-green"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                <span className="flex items-center gap-1">
                  <Clock className="size-3" /> {s}
                </span>
                {i === 2 && <Check className="size-3.5" />}
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-lg bg-[image:var(--gradient-green)] text-white text-[11px] font-semibold px-3 py-2 text-center shadow-glow-green">
            Confirm 10:30 AM
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------------- FORMS ---------------- */
export function FormsMock() {
  return (
    <MockFrame title="care.borna.ai · Intake form">
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">
              Medical History
            </div>
            <div className="font-display text-lg text-navy">Step 3 of 4</div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-[10px] font-semibold">
            <Check className="size-3" /> Auto-saved
          </span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full w-3/4 bg-[image:var(--gradient-green)]" />
        </div>
        <div className="mt-4 space-y-2 flex-1 overflow-hidden">
          {[
            { label: "Any allergies?", val: "Penicillin", check: true },
            { label: "Current medications", val: "Vitamin D · Metformin", check: true },
            { label: "Recent surgeries?", val: "None", check: true },
            { label: "Blood pressure", val: "118 / 76", check: false },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
            >
              <div className="text-[10px] text-slate-500">{f.label}</div>
              <div className="mt-0.5 flex items-center justify-between">
                <div className="text-sm text-navy font-medium">{f.val}</div>
                {f.check && <Check className="size-4 text-moss" />}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px]">
          <span className="text-slate-500 flex items-center gap-1">
            <FileText className="size-3.5" /> Signed digitally
          </span>
          <span className="rounded-full bg-navy text-white px-3 py-1.5 font-semibold">
            Continue →
          </span>
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------------- MESSAGING ---------------- */
export function ChatMock() {
  return (
    <MockFrame title="care.borna.ai · Secure chat" accent="navy">
      <div className="p-4 h-full flex flex-col bg-slate-50/50">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
          <div className="size-8 rounded-full bg-[image:var(--gradient-green)] grid place-items-center text-white text-xs font-bold">
            DR
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-navy">Dr. Rahimi</div>
            <div className="text-[10px] text-moss flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-moss animate-pulse" />
              Online · encrypted
            </div>
          </div>
          <span className="text-[10px] font-semibold text-slate-400">HIPAA</span>
        </div>
        <div className="flex-1 mt-3 space-y-2 overflow-hidden">
          <div className="max-w-[75%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2 text-[11px] text-navy">
            Hi Layla — your lab results look great.
          </div>
          <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-[image:var(--gradient-green)] text-white px-3 py-2 text-[11px]">
            Thank you! Do I still need the follow-up?
          </div>
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2 text-[11px] text-navy">
            Yes — 3 months from now. I'll send a link now.
          </div>
          <div className="max-w-[85%] rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-2 flex items-center gap-2 text-[11px] text-emerald-900">
            <Paperclip className="size-3.5" />
            <span className="flex-1 font-medium">Follow-up · Nov 12, 10:30 AM</span>
            <span className="text-emerald-700 font-semibold">Book</span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5">
          <span className="text-[11px] text-slate-400 flex-1">Type a message…</span>
          <Send className="size-3.5 text-forest" />
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------------- PAYMENTS ---------------- */
export function PaymentsMock() {
  return (
    <MockFrame title="care.borna.ai · Checkout">
      <div className="p-4 h-full grid grid-cols-[1.1fr_1fr] gap-3">
        <div className="rounded-xl border border-slate-200 p-3">
          <div className="text-[10px] uppercase tracking-widest text-slate-500">
            Invoice #4821
          </div>
          <div className="mt-2 space-y-1.5 text-[11px]">
            {[
              ["Consultation", "$120"],
              ["Cleaning", "$85"],
              ["X-ray (2)", "$60"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between text-navy">
                <span>{k}</span>
                <span className="font-medium">{v}</span>
              </div>
            ))}
            <div className="pt-1.5 mt-1.5 border-t border-slate-200 flex justify-between font-semibold text-navy">
              <span>Total</span>
              <span>$265.00</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-xl bg-navy text-white p-3 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 size-20 rounded-full bg-moss/30 blur-2xl" />
            <div className="relative">
              <div className="text-[9px] uppercase tracking-widest text-white/60">
                Card on file
              </div>
              <div className="mt-1 text-sm font-mono tracking-widest">
                •••• 4242
              </div>
              <div className="mt-4 flex justify-between text-[10px] text-white/70">
                <span>Visa</span>
                <span>12/27</span>
              </div>
            </div>
          </div>
          <button className="rounded-xl bg-[image:var(--gradient-green)] text-white text-xs font-semibold py-2.5 shadow-glow-green flex items-center justify-center gap-1.5">
            <CreditCard className="size-3.5" /> Pay $265.00
          </button>
          <div className="rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] px-2 py-1.5 flex items-center gap-1.5">
            <Check className="size-3" /> Receipt auto-sent · reconciled to visit
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------------- PROVIDERS ---------------- */
export function ProvidersMock() {
  const providers = [
    { n: "Dr. Rahimi", s: "General Dentistry", c: "bg-emerald-100 text-emerald-800" },
    { n: "Dr. Chen", s: "Orthodontics", c: "bg-sky-100 text-sky-800" },
    { n: "Dr. Okafor", s: "Endodontics", c: "bg-amber-100 text-amber-800" },
  ];
  return (
    <MockFrame title="care.borna.ai · Providers">
      <div className="p-4 h-full">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">
              Team
            </div>
            <div className="font-display text-lg text-navy">3 providers · 8 services</div>
          </div>
          <div className="rounded-lg bg-secondary text-forest-deep text-[10px] px-2 py-1 font-semibold">
            All branches
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {providers.map((p) => (
            <div
              key={p.n}
              className="rounded-xl border border-slate-200 bg-white p-2.5 flex items-center gap-3"
            >
              <div className="size-9 rounded-full bg-[image:var(--gradient-green)] text-white grid place-items-center text-xs font-bold">
                {p.n.split(" ")[1][0]}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-navy">{p.n}</div>
                <div className="text-[10px] text-slate-500 flex items-center gap-1">
                  <Stethoscope className="size-3" /> {p.s}
                </div>
              </div>
              <div className="flex gap-1">
                <span className={`text-[9px] font-semibold rounded-full px-2 py-0.5 ${p.c}`}>
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-slate-50 border border-dashed border-slate-300 p-2 text-center text-[11px] text-slate-500">
          + Add provider · inherits branch policies
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------------- APPOINTMENTS ---------------- */
export function AppointmentsMock() {
  const times = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00"];
  const evts: { start: number; span: number; who: string; color: string; row: number }[] = [
    { start: 0, span: 2, who: "L. Ahmadi · Cleaning", color: "bg-emerald-500", row: 0 },
    { start: 1, span: 1, who: "M. Park · Consult", color: "bg-sky-500", row: 1 },
    { start: 3, span: 2, who: "S. Rossi · Filling", color: "bg-amber-500", row: 0 },
    { start: 4, span: 1, who: "A. Diaz · Follow-up", color: "bg-forest", row: 1 },
  ];
  return (
    <MockFrame title="care.borna.ai · Today" accent="navy">
      <div className="p-4 h-full">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">
              Thursday
            </div>
            <div className="font-display text-lg text-navy">4 appointments · 0 gaps</div>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-500">
            <ClipboardList className="size-3.5" /> Drag to reschedule
          </div>
        </div>
        <div className="mt-3 grid grid-cols-6 gap-1 text-[9px] font-semibold text-slate-500 uppercase">
          {times.map((t) => (
            <div key={t}>{t}</div>
          ))}
        </div>
        <div className="mt-1 relative rounded-xl border border-slate-200 bg-slate-50 p-2 h-32 overflow-hidden">
          {[0, 1].map((r) => (
            <div key={r} className="grid grid-cols-6 gap-1 mb-1.5 h-11">
              {times.map((_, ci) => {
                const e = evts.find((x) => x.row === r && x.start === ci);
                if (e) {
                  return (
                    <div
                      key={ci}
                      className={`${e.color} col-span-${e.span} rounded-md px-2 py-1 text-white text-[10px] font-medium flex items-center shadow`}
                      style={{ gridColumn: `span ${e.span} / span ${e.span}` }}
                    >
                      {e.who}
                    </div>
                  );
                }
                // if column is covered by a spanning event, skip cell
                const covered = evts.find(
                  (x) => x.row === r && x.start < ci && x.start + x.span > ci,
                );
                if (covered) return null;
                return <div key={ci} className="rounded-md border border-dashed border-slate-300" />;
              })}
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px]">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 font-semibold">
            <Check className="size-3" /> 3 reminders sent
          </span>
          <span className="text-slate-500">Waitlist: 2 patients</span>
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------------- BRANCHES ---------------- */
export function BranchesFeatureMock() {
  const branches = [
    { n: "Downtown", pts: 1240, appts: 42 },
    { n: "Uptown", pts: 890, appts: 28 },
    { n: "Airport", pts: 512, appts: 19 },
  ];
  return (
    <MockFrame title="care.borna.ai · Network">
      <div className="p-4 h-full">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">
              All branches
            </div>
            <div className="font-display text-lg text-navy">One dashboard · 3 locations</div>
          </div>
          <Building2 className="size-4 text-forest" />
        </div>
        <div className="mt-3 space-y-2">
          {branches.map((b, i) => (
            <div
              key={b.n}
              className="rounded-xl border border-slate-200 p-2.5 flex items-center gap-3 bg-white"
            >
              <div className="grid size-9 place-items-center rounded-lg bg-secondary text-forest-deep">
                <MapPin className="size-4" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-navy">{b.n}</div>
                <div className="text-[10px] text-slate-500">
                  {b.pts} patients · {b.appts} today
                </div>
              </div>
              <div className="w-20 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-[image:var(--gradient-green)]"
                  style={{ width: `${60 + i * 12}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-[image:var(--gradient-green)] text-white text-[10px] font-semibold px-3 py-2 flex items-center justify-between shadow-glow-green">
          <span>Independent data · unified controls</span>
          <span>→</span>
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------------- FAMILY ---------------- */
export function FamilyMock() {
  const members = [
    { n: "Layla A.", r: "You", age: 34 },
    { n: "Omar A.", r: "Son", age: 8 },
    { n: "Nora A.", r: "Daughter", age: 5 },
  ];
  return (
    <MockFrame title="care.borna.ai · My family">
      <div className="p-4 h-full">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">
              1 login · shared billing
            </div>
            <div className="font-display text-lg text-navy">The Ahmadi family</div>
          </div>
          <Users className="size-4 text-forest" />
        </div>
        <div className="mt-3 space-y-2">
          {members.map((m, i) => (
            <div
              key={m.n}
              className={`rounded-xl border p-2.5 flex items-center gap-3 ${
                i === 0
                  ? "border-forest bg-emerald-50/50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="size-9 rounded-full bg-[image:var(--gradient-green)] text-white grid place-items-center text-xs font-bold">
                {m.n[0]}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-navy">
                  {m.n} <span className="text-[10px] text-slate-500 font-normal">· {m.r}</span>
                </div>
                <div className="text-[10px] text-slate-500">Age {m.age}</div>
              </div>
              <button className="rounded-full border border-slate-200 text-[10px] font-semibold px-2 py-1 text-navy">
                Book
              </button>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-slate-50 border border-slate-200 p-2 text-[10px] text-slate-600 flex items-center justify-between">
          <span>3 upcoming appointments</span>
          <span className="font-semibold text-forest">$120 balance</span>
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------------- HISTORY ---------------- */
export function HistoryMock() {
  const items = [
    { d: "Oct 12", t: "Cleaning · Dr. Rahimi", tag: "Visit", i: Calendar },
    { d: "Oct 12", t: "Invoice #4821 · $265", tag: "Payment", i: CreditCard },
    { d: "Oct 10", t: "Intake form completed", tag: "Form", i: FileText },
    { d: "Sep 28", t: "Message from Dr. Rahimi", tag: "Chat", i: MessageSquare },
  ];
  return (
    <MockFrame title="care.borna.ai · Patient chart" accent="navy">
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
          <Search className="size-3.5 text-slate-500" />
          <span className="text-[11px] text-slate-500 flex-1">Search history…</span>
          <span className="text-[10px] font-semibold text-slate-400">⌘K</span>
        </div>
        <div className="mt-3 flex-1 space-y-1.5 overflow-hidden">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-2.5 flex items-center gap-3"
            >
              <div className="grid size-8 place-items-center rounded-lg bg-secondary text-forest-deep">
                <it.i className="size-3.5" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-navy">{it.t}</div>
                <div className="text-[10px] text-slate-500">{it.d}</div>
              </div>
              <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-400">
                {it.tag}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
          <span className="inline-flex items-center gap-1">
            <History className="size-3" /> Full audit trail
          </span>
          <span>Exportable · CSV / PDF</span>
        </div>
      </div>
    </MockFrame>
  );
}

/* Registry keyed to feature id */
export const FEATURE_MOCK_REGISTRY: Record<string, React.FC> = {
  scheduling: SchedulingMock,
  forms: FormsMock,
  messaging: ChatMock,
  payments: PaymentsMock,
  providers: ProvidersMock,
  appointments: AppointmentsMock,
  branches: BranchesFeatureMock,
  family: FamilyMock,
  history: HistoryMock,
};
