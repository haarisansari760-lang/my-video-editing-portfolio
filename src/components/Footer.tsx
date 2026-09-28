import { footer } from "../content/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-[var(--edge-padding-x)] py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-[var(--font-display)] text-base font-semibold tracking-[0.08em] text-[var(--color-text)]">
            {footer.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">{footer.tagline}</p>
        </div>
        <p className="text-xs text-[var(--color-muted)]">{footer.copyright}</p>
      </div>
    </footer>
  );
}
