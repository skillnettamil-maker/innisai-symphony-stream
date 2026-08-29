import { Clock, Mic } from "lucide-react";
import type { Programme } from "@/data/site";

export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <article className="flex h-full flex-col gap-2 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-2 text-sm font-semibold text-accent-foreground">
        <Clock className="h-4 w-4 text-accent" />
        <span>{programme.time}</span>
        <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
          {programme.part}
        </span>
      </div>
      <h3 className="text-base font-bold leading-snug text-foreground">{programme.name}</h3>
      <p className="mt-auto flex items-center gap-2 text-sm text-muted-foreground">
        <Mic className="h-4 w-4 text-primary" />
        {programme.rj}
      </p>
    </article>
  );
}
