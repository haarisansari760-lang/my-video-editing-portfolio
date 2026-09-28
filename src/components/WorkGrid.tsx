import { useState } from "react";
import { workItems, type WorkItem } from "../content/siteContent";
import { useReveal } from "../hooks/useReveal";
import WorkCard from "./WorkCard";
import VideoModal from "./VideoModal";

export default function WorkGrid() {
  const headingRef = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<WorkItem | null>(null);

  return (
    <section id="work" className="py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-[var(--edge-padding-x)]">
        <div ref={headingRef} className="reveal mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Selected Work
            </p>
            <h2 className="max-w-lg text-[clamp(2rem,4.5vw,3.25rem)] font-semibold uppercase leading-[0.98] tracking-[-0.02em]">
              Vertical reels, built to hold attention.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
            Six pieces across the formats I work in most. Click any card to watch it full screen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item) => (
            <WorkCard key={item.id} item={item} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && <VideoModal item={active} onClose={() => setActive(null)} />}
    </section>
  );
}
