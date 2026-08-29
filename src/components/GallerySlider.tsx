import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function GallerySlider({
  title,
  images,
  autoplay = true,
}: {
  title: string;
  images: string[];
  autoplay?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = images.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (!autoplay || count < 2 || zoom) return;
    const id = window.setInterval(() => go(1), 6000);
    return () => window.clearInterval(id);
  }, [autoplay, count, go, zoom]);

  if (count === 0) return null;

  return (
    <section className="rounded-2xl border border-border bg-card p-4 sm:p-5">
      <h3 className="mb-4 text-lg font-bold text-primary">{title}</h3>

      <div
        className="relative overflow-hidden rounded-xl bg-secondary"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setZoom(true)}
              aria-label={`${title} – படம் ${i + 1} பெரிதாக்கு`}
              className="flex h-[320px] w-full shrink-0 items-center justify-center p-2 sm:h-[440px]"
            >
              <img
                src={src}
                alt={`${title} – இன்னிசை வானொலி படம் ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </button>
          ))}
        </div>

        {count > 1 && (
          <>
            <SliderButton side="start" onClick={() => go(-1)} label="முந்தையது" />
            <SliderButton side="end" onClick={() => go(1)} label="அடுத்தது" />
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`படம் ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      )}

      {zoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setZoom(false)}
        >
          <img
            src={images[index]}
            alt={`${title} – இன்னிசை வானொலி படம் ${index + 1}`}
            className="max-h-full max-w-full rounded-lg object-contain"
          />
          <button
            type="button"
            aria-label="மூடு"
            className="absolute end-4 top-4 rounded-full bg-card p-2 text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}

function SliderButton({
  side,
  onClick,
  label,
}: {
  side: "start" | "end";
  onClick: () => void;
  label: string;
}) {
  const Icon = side === "start" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/90 p-2 text-primary shadow-sm transition-colors hover:bg-card ${
        side === "start" ? "start-2" : "end-2"
      }`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
