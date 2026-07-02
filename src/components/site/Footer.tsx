import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-dark-bg text-white/80">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 size-[500px] rounded-full bg-forest/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <Logo className="h-16 sm:h-20 w-auto" />
            <p className="mt-6 max-w-md text-sm text-white/60 leading-relaxed">
              Part of the Borna ecosystem — intelligent software for modern
              healthcare organizations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a
              href="https://borna.ai"
              className="hover:text-white transition-colors"
            >
              Borna
            </a>
            <a
              href="https://care.borna.ai/"
              className="hover:text-white transition-colors"
            >
              Sign in
            </a>
            <a
              href="https://borna.ai/demo/"
              className="hover:text-white transition-colors"
            >
              Book a demo
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Borna. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-moss animate-pulse" />
            HIPAA-aligned · SOC 2 in progress
          </div>
        </div>
      </div>
    </footer>
  );
}
