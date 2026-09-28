import { useEffect, useState } from "react";
import { nav } from "../content/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-[var(--edge-padding-x)] py-5"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-[var(--font-display)] text-lg font-semibold tracking-[0.08em] text-[var(--color-text)]"
        >
          {nav.logo}
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[var(--color-border)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[1.5px] w-4 bg-[var(--color-text)] transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-4 bg-[var(--color-text)] transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-[var(--edge-padding-x)] py-6 md:hidden">
          <ul className="flex flex-col gap-6">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium uppercase tracking-[0.12em] text-[var(--color-text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
