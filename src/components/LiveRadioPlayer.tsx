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
    <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6">
      <audio
        ref={audioRef}
        preload="none"
        onWaiting={() => setStatus("loading")}
        onPlaying={() => setStatus("playing")}
        onError={() => setStatus("error")}
      />
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={status === "playing" ? pause : play}
            aria-label={status === "playing" ? "இடைநிறுத்து" : "இசைக்க"}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {status === "loading" ? (
              <Loader2 className="h-7 w-7 animate-spin" />
            ) : status === "playing" ? (
              <Pause className="h-7 w-7" />
            ) : (
              <Play className="ms-1 h-7 w-7" />
            )}
          </button>
          <div className="text-start">
            <p className="text-lg font-semibold text-foreground">இன்னிசை வானொலி நேரலை</p>
            <p className="text-sm text-muted-foreground">
              {status === "playing"
                ? "🔴 நேரலை ஒலிபரப்பு"
                : status === "loading"
                  ? "இணைக்கப்படுகிறது..."
                  : status === "error"
                    ? "ஒலிபரப்பை இணைக்க முடியவில்லை"
                    : "கேட்க இயக்கவும்"}
            </p>
          </div>
        </div>

        <div className="flex w-full items-center gap-3 sm:w-auto">
          {status === "error" ? (
            <button
              type="button"
              onClick={play}
              className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              <RotateCcw className="h-4 w-4" /> மீண்டும் முயற்சி
            </button>
          ) : (
            <div className="flex w-full items-center gap-2 sm:w-44">
              <Volume2 className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                aria-label="ஒலி அளவு"
                onChange={(e) => setVolume(Number(e.target.value))}
                className="h-1 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-accent"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
