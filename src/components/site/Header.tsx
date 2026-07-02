import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Resources", href: "#resources" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled
              ? "glass shadow-card"
              : "border border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <Logo variant="dark" className="h-9 sm:h-11 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-navy/80 transition-colors hover:text-forest"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://care.borna.ai/"
              className="rounded-full px-4 py-2 text-sm font-medium text-navy/80 transition-colors hover:text-forest"
            >
              Sign in
            </a>
            <a
              href="https://borna.ai/demo/"
              className="group relative overflow-hidden rounded-full bg-[image:var(--gradient-green)] px-5 py-2.5 text-sm font-semibold text-white shadow-elegant transition-all duration-300 hover:shadow-glow-green hover:-translate-y-0.5"
            >
              <span className="relative z-10">Book a demo</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden rounded-full p-2 text-navy"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 shadow-card animate-fade-up">
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy hover:bg-secondary"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href="https://care.borna.ai/"
                  className="rounded-full border border-border px-4 py-2.5 text-center text-sm font-medium text-navy"
                >
                  Sign in
                </a>
                <a
                  href="https://borna.ai/demo/"
                  className="rounded-full bg-[image:var(--gradient-green)] px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Book demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
