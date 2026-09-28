import { useEffect, useRef } from "react";

/**
 * Plays a muted video only while it is meaningfully visible in the
 * viewport, and pauses it otherwise. Used for the work grid previews.
 */
export function useInViewAutoplay<T extends HTMLVideoElement>(threshold = 0.55) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = node.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                /* autoplay might be blocked, ignore */
              });
            }
          } else {
            node.pause();
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
