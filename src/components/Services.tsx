import { services } from "../content/siteContent";
import { useReveal } from "../hooks/useReveal";

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-[var(--edge-padding-x)]">
        <div ref={ref} className="reveal mb-14 md:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            What I Do
          </p>
          <h2 className="max-w-xl text-[clamp(2rem,4.5vw,3.25rem)] font-semibold uppercase leading-[0.98] tracking-[-0.02em]">
            Three formats, done properly.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
          {services.map((service) => (
            <div key={service.number} className="flex flex-col gap-6 bg-[var(--color-bg)] p-8 md:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.1em] text-[var(--color-muted)]">
                  {service.number}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold leading-snug md:text-2xl">{service.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
