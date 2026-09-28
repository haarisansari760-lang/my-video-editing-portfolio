import { useEffect, useRef, useState } from "react";
import type { WorkItem } from "../content/siteContent";

interface VideoModalProps {
  item: WorkItem;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} reel player`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text)] transition-colors duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className="relative aspect-[9/16] h-[82vh] max-h-[820px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={item.videoSrc}
          autoPlay
          loop
          playsInline
          muted={muted}
          className="h-full w-full object-contain"
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-5">
          <span className="text-xs font-semibold tracking-[0.15em] text-[var(--color-text)]">{item.number}</span>
          <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-text)]">
            {item.category}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-[var(--color-text)] backdrop-blur-sm transition-colors duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          {muted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
              <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
              <path
                d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
