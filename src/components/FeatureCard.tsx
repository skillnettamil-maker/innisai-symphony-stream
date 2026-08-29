import type { LucideIcon } from "lucide-react";

export function FeatureCard({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <li className="flex items-start gap-3 px-2 py-3 sm:px-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 text-sm font-medium leading-relaxed text-primary-foreground">
        {text}
      </span>
    </li>
  );
}
