import { hero } from "../content/siteContent";
import { useReveal } from "../hooks/useReveal";
import Avatar from "./Avatar";

export default function Hero() {
  const textRef = useReveal<HTMLDivElement>();
  const avatarRef = useReveal<HTMLDivElement>();

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-[var(--edge-padding-x)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div ref={textRef} className="reveal">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            {hero.eyebrow}
          </p>

          <h1 className="text-[clamp(2.75rem,8vw,6rem)] font-semibold uppercase leading-[0.94] tracking-[-0.02em] text-[var(--color-text)]">
            {hero.headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            {hero.subtext}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={hero.primaryButton.href} className="btn btn-primary">
              {hero.primaryButton.label}
            </a>
            <a href={hero.secondaryButton.href} className="btn btn-secondary">
              {hero.secondaryButton.label}
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-10 border-t border-[var(--color-border)] pt-6">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-sm font-medium text-[var(--color-text)]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={avatarRef} className="reveal reveal-delay-2">
          <Avatar />
        </div>
      </div>
    </section>
  );
}
