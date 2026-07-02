import { Phone, FileWarning, ClipboardList, Wallet, Network, HourglassIcon } from "lucide-react";

const PROBLEMS = [
  { icon: Phone, title: "Endless phone tag", copy: "Reception plays voicemail ping-pong while patients wait days to book." },
  { icon: FileWarning, title: "Paper intake forms", copy: "Illegible handwriting, missing history, and clipboards that never make it back." },
  { icon: ClipboardList, title: "Disconnected scheduling", copy: "Calendar in one app, reminders in another, no-shows in a spreadsheet." },
  { icon: Wallet, title: "Manual billing chaos", copy: "Receipts by email, invoices by hand, collections falling through the cracks." },
  { icon: Network, title: "Every branch on its own", copy: "Each location runs a different system. Nothing rolls up. Nothing scales." },
  { icon: HourglassIcon, title: "Patients waiting in silence", copy: "No status, no confirmation, no chat. Just a lobby full of restless faces." },
];

export function Problem() {
  return (
    <section id="solutions" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-forest-deep">
            The problem
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-navy">
            Healthcare still runs on
            <br />
            <span className="italic text-forest">disconnected software</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Six different tools, three separate logins, and a reception team
            that spends more time reconciling systems than caring for people.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant hover:border-forest/30"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 size-24 rounded-full bg-destructive/5 blur-2xl transition-opacity group-hover:opacity-0" />
              <div className="relative">
                <div className="grid size-11 place-items-center rounded-xl bg-destructive/10 text-destructive">
                  <p.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-2xl text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
