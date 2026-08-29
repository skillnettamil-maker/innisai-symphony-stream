import { useState } from "react";
import { ProgrammeCard } from "./ProgrammeCard";
import type { Programme } from "@/data/site";

export type ScheduleTab = { id: string; label: string; programmes: Programme[] };

export function ProgrammeSchedule({ tabs }: { tabs: ScheduleTab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="நிகழ்ச்சி நிரல்"
        className="mx-auto flex w-full max-w-md items-center gap-1 rounded-full border border-border bg-card p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={tab.id === current?.id}
            onClick={() => setActive(tab.id)}
            className={`flex-1 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
              tab.id === current?.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {current?.programmes.map((p) => (
          <ProgrammeCard key={`${p.time}-${p.name}`} programme={p} />
        ))}
      </div>
    </div>
  );
}
