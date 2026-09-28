import type { WorkItem } from "../content/siteContent";
import { useInViewAutoplay } from "../hooks/useInViewAutoplay";

interface WorkCardProps {
  item: WorkItem;
  onOpen: (item: WorkItem) => void;
}

export default function WorkCard({ item, onOpen }: WorkCardProps) {
  const videoRef = useInViewAutoplay<HTMLVideoElement>();

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-left transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-[var(--color-accent)]/60 focus-visible:-translate-y-1"
      aria-label={`Open ${item.title} reel`}
    >
      <video
        ref={videoRef}
        src={item.videoSrc}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/25"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="text-xs font-semibold tracking-[0.15em] text-[var(--color-text)]">{item.number}</span>
        <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-text)] backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-lg font-semibold leading-tight text-[var(--color-text)]">{item.title}</h3>
        <p className="mt-2 text-sm leading-snug text-[var(--color-muted)]">{item.description}</p>
      </div>
    </button>
  );
}
