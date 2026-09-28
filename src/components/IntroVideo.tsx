import { useRef, useState } from "react";
import { introSection } from "../content/siteContent";
import { useReveal } from "../hooks/useReveal";

export default function IntroVideo() {
  const ref = useReveal<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setPlaying(true);
  };

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div
        ref={ref}
        className="reveal mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-[var(--edge-padding-x)] py-20 text-center md:py-28"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          {introSection.eyebrow}
        </p>

        {/* Vertical 9:16 frame. Do not stretch the video, object-fit stays contain. */}
        <div className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-black shadow-[0_40px_80px_rgba(0,0,0,0.45)] aspect-[9/16] sm:max-w-[340px]">
          <video
            ref={videoRef}
            src={introSection.videoSrc}
            controls={playing}
            playsInline
            preload="metadata"
            className="h-full w-full object-contain"
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play intro video"
              className="group absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-300 hover:bg-black/10"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-accent)]/70 bg-[var(--color-bg)]/70 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 5v14l11-7L8 5z" fill="#38D5E5" />
                </svg>
              </span>
            </button>
          )}
        </div>

        <p className="text-sm text-[var(--color-muted)]">{introSection.line}</p>
      </div>
    </section>
  );
}
