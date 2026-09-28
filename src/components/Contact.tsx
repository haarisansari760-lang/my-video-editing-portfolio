import { contact } from "../content/siteContent";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="py-[var(--section-padding-y)]">
      <div
        ref={ref}
        className="reveal mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-[var(--edge-padding-x)]"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          {contact.eyebrow}
        </p>

        <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-semibold uppercase leading-[0.94] tracking-[-0.02em]">
          {contact.headlineLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="max-w-md text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          {contact.supportingLine}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {contact.buttons.map((button, i) => (
            <a
              key={button.label}
              href={button.href}
              target={button.external ? "_blank" : undefined}
              rel={button.external ? "noreferrer" : undefined}
              className={`btn ${i === 0 ? "btn-secondary" : "btn-primary"}`}
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
