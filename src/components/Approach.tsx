import { approach } from "../content/siteContent";
import { useReveal } from "../hooks/useReveal";

export default function Approach() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="approach" className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-[var(--edge-padding-x)] py-[var(--section-padding-y)] lg:grid-cols-[1fr_1fr] lg:gap-20"
      >
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            {approach.eyebrow}
          </p>
          <h2 className="text-[clamp(2.25rem,5.5vw,4rem)] font-semibold uppercase leading-[0.96] tracking-[-0.02em]">
            {approach.headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="flex flex-col justify-center gap-6">
          {approach.paragraphs.map((p, i) => (
            <p key={i} className="max-w-lg text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
