import { useEffect, useState } from "react";
import { avatarConfig } from "../content/siteContent";

// Module level cache so the chroma-key pass only ever runs once per
// source/settings combination, even across component remounts.
const processedCache = new Map<string, string>();

function keyOutGreen(src: string, threshold: number, softness: number, gradeStrength: number): Promise<string> {
  const cacheKey = `${src}|${threshold}|${softness}|${gradeStrength}`;
  const cached = processedCache.get(cacheKey);
  if (cached) return Promise.resolve(cached);

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) throw new Error("Canvas context unavailable");

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // How "green screen" a pixel is: green channel dominance
          // over the strongest of red/blue.
          const greenness = g - Math.max(r, b);

          if (greenness > threshold - softness) {
            const t = Math.min(1, Math.max(0, (greenness - (threshold - softness)) / softness));
            // Fade alpha for green pixels, softly at the edges.
            data[i + 3] = data[i + 3] * (1 - t);
            // Pull back green spill so edges do not glow green.
            data[i + 1] = g - greenness * t * 0.7;
          }

          // Subtle cinematic color grade: cool shadows, gentle desaturation.
          const avg = (r + g + b) / 3;
          data[i] = data[i] * (1 - gradeStrength * 0.3) + avg * gradeStrength * 0.3;
          data[i + 1] = data[i + 1] * (1 - gradeStrength * 0.15);
          data[i + 2] = Math.min(255, data[i + 2] * (1 + gradeStrength * 0.25) + gradeStrength * 6);
        }

        ctx.putImageData(imageData, 0, 0);
        const url = canvas.toDataURL("image/png");
        processedCache.set(cacheKey, url);
        resolve(url);
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = () => reject(new Error("Avatar image failed to load"));
    img.src = src;
  });
}

type Status = "loading" | "ready" | "error";

export default function Avatar() {
  const [status, setStatus] = useState<Status>("loading");
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    keyOutGreen(avatarConfig.src, avatarConfig.greenThreshold, avatarConfig.softness, avatarConfig.gradeStrength)
      .then((url) => {
        if (!cancelled) {
          setSrc(url);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full 150% max-w-[500px]">
      {/* Ambient backdrop glow behind the avatar, keeps it grounded on the dark bg */}
      <div
        className="absolute inset-0 rounded-[28px]"
        style={{
          
        }}
        aria-hidden="true"
      />

      {status === "ready" && src && (
        <img
          src={src}
          alt={avatarConfig.alt}
          className="relative z-10 h-full w-full object-contain "
          style={{ transform: "scaleX(-1)" }}
          draggable={false}
        />
      )}

      {status === "loading" && (
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="h-16 w-16 animate-pulse rounded-full border border-[var(--color-border)]" />
        </div>
      )}

      {status === "error" && (
        <div className="relative z-10 h-full w-full overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
          {/* Fallback: original image, tight crop, still flipped, sitting on a graded backdrop */}
          <img
            src={avatarConfig.src}
            alt={avatarConfig.alt}
            className="h-full w-full object-cover object-top opacity-90"
            style={{ transform: "scaleX(-1)" }}
            draggable={false}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}
    </div>
  );
}
