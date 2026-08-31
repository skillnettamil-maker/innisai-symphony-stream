import { useEffect, useRef, useState } from "react";
import { Loader2, Pause, Play, RotateCcw, Volume2 } from "lucide-react";
import { STREAM_URL } from "@/data/site";

type Status = "idle" | "loading" | "playing" | "error";

export function LiveRadioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [volume, setVolume] = useState(0.9);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    setStatus("loading");
    // cache-bust so a retry re-opens the live stream
    audio.src = `${STREAM_URL}?t=${Date.now()}`;
    try {
      await audio.play();
      setStatus("playing");
    } catch {
      setStatus("error");
    }
  };

  const pause = () => {
    audioRef.current?.pause();
    setStatus("idle");
  };

  return (
    <div
      className="rounded-2xl p-4 text-primary-foreground shadow-[var(--shadow-card)] sm:p-5"
      style={{ backgroundImage: "var(--gradient-royal)" }}
    >
      <audio
        ref={audioRef}
        preload="none"
        onWaiting={() => setStatus("loading")}
        onPlaying={() => setStatus("playing")}
        onError={() => setStatus("error")}
      />
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[auto_minmax(0,1fr)_auto]">
        <button
          type="button"
          onClick={status === "playing" ? pause : play}
          aria-label={status === "playing" ? "இடைநிறுத்து" : "இசைக்க"}
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:h-[68px] sm:w-[68px]"
        >
          {status === "loading" ? (
            <Loader2 className="h-7 w-7 animate-spin" />
          ) : status === "playing" ? (
            <Pause className="h-7 w-7" />
          ) : (
            <Play className="ms-1 h-7 w-7" />
          )}
        </button>

        <div className="min-w-0 text-start">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-lg font-bold sm:text-xl">இன்னிசை வானொலி நேரலை</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive px-2.5 py-0.5 text-[11px] font-bold text-destructive-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive-foreground" />
              LIVE
            </span>
          </div>
          <p className="mt-1 text-sm text-primary-foreground/80">
            {status === "playing"
              ? "நேரலை ஒலிபரப்பு"
              : status === "loading"
                ? "இணைக்கப்படுகிறது..."
                : status === "error"
                  ? "ஒலிபரப்பை இணைக்க முடியவில்லை"
                  : "நேரலையை கேட்க இயக்கவும்"}
          </p>
        </div>

        <div className="col-span-2 flex w-full items-center gap-3 sm:col-span-1 sm:w-52">
          {status === "error" ? (
            <button
              type="button"
              onClick={play}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-primary-foreground/10"
            >
              <RotateCcw className="h-4 w-4" /> மீண்டும் முயற்சி
            </button>
          ) : (
            <>
              <Volume2 className="h-5 w-5 shrink-0 text-primary-foreground/80" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                aria-label="ஒலி அளவு"
                onChange={(e) => setVolume(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-primary-foreground/25 accent-[oklch(0.82_0.13_88)]"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
