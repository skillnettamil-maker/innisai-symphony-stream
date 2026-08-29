import { Clock, Mic } from "lucide-react";
import type { Programme } from "@/data/site";

export function ProgrammeCard({
  programme,
  featured = false,
}: {
  programme: Programme;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <article
        className="flex h-full flex-col justify-between gap-4 rounded-2xl p-5 text-primary-foreground shadow-[var(--shadow-card)]"
        style={{ backgroundImage: "var(--gradient-royal)" }}
      >
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold text-gold">
          <Mic className="h-3.5 w-3.5" /> {programme.part}
        </span>
        <h3 className="text-xl font-extrabold leading-snug">{programme.name}</h3>
        <div>
          <p className="text-sm text-primary-foreground/85">{programme.rj}</p>
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">
            <Clock className="h-3.5 w-3.5 text-gold" /> {programme.time}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[var(--shadow-soft)]">
      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-accent-foreground">
        <Clock className="h-4 w-4 text-accent" />
        <span>{programme.time}</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
          {programme.part}
        </span>
      </div>
      <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg">
        {programme.name}
      </h3>
      <p className="mt-auto flex items-center gap-2 text-sm text-muted-foreground">
        <Mic className="h-4 w-4 text-primary" />
        {programme.rj}
      </p>
    </article>
  );
}
