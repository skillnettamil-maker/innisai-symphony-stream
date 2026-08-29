import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function GallerySlider({
  title,
  images,
  autoplay = true,
  maxPerView = 3,
}: {
  title: string;
  images: string[];
  autoplay?: boolean;
  maxPerView?: number;
}) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);
  const [perView, setPerView] = useState(1);
  const touchX = useRef<number | null>(null);
  const count = images.length;

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const base = w >= 1280 ? maxPerView : w >= 768 ? Math.min(2, maxPerView) : 1;
      setPerView(Math.max(1, Math.min(base, count)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [count, maxPerView]);

  const maxIndex = Math.max(0, count - perView);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir < 0 ? maxIndex : i + dir > maxIndex ? 0 : i + dir)),
    [maxIndex],
  );

  useEffect(() => {
    if (!autoplay || maxIndex === 0 || zoom !== null) return;
    const id = window.setInterval(() => go(1), 6000);
    return () => window.clearInterval(id);
  }, [autoplay, maxIndex, go, zoom]);

  if (count === 0) return null;

  return (
    <section className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-6 w-1.5 rounded-full bg-accent" />
        <h3 className="min-w-0 truncate text-lg font-extrabold text-primary sm:text-xl">{title}</h3>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {images.map((src, i) => (
            <div key={src} className="shrink-0 p-1.5" style={{ width: `${100 / perView}%` }}>
              <button
                type="button"
                onClick={() => setZoom(i)}
                aria-label={`${title} – படம் ${i + 1} பெரிதாக்கு`}
                className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-lilac p-2 transition-shadow hover:shadow-[var(--shadow-soft)] sm:h-[360px] lg:h-[420px]"
              >
                <img
                  src={src}
                  alt={`${title} – இன்னிசை வானொலி படம் ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              </button>
            </div>
          ))}
        </div>

        {maxIndex > 0 && (
          <>
            <SliderButton side="start" onClick={() => go(-1)} label="முந்தையது" />
            <SliderButton side="end" onClick={() => go(1)} label="அடுத்தது" />
          </>
        )}
      </div>

      {maxIndex > 0 && (
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`படம் ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-7 bg-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      )}

      {zoom !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4"
          onClick={() => setZoom(null)}
        >
          <img
            src={images[zoom]}
            alt={`${title} – இன்னிசை வானொலி படம் ${zoom + 1}`}
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
      className={`absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary p-2.5 text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90 ${
        side === "start" ? "start-2" : "end-2"
      }`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
