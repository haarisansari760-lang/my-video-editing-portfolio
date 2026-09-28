import { processSteps } from "../content/siteContent";
import { useReveal } from "../hooks/useReveal";

export default function Process() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-[var(--edge-padding-x)]">
        <div ref={ref} className="reveal mb-14 md:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            How I Work
          </p>
          <h2 className="max-w-xl text-[clamp(2rem,4.5vw,3.25rem)] font-semibold uppercase leading-[0.98] tracking-[-0.02em]">
            A simple, steady process.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.number} className="border-t border-[var(--color-border)] pt-6">
              <span className="text-sm font-semibold tracking-[0.1em] text-[var(--color-accent)]">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
