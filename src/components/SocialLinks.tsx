import { Facebook, Instagram, Music2, Youtube } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/site";

const ICONS = {
  Facebook,
  Instagram,
  YouTube: Youtube,
  TikTok: Music2,
} as const;

export function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.label as keyof typeof ICONS];
        return (
          <li key={link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`inline-flex items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:border-accent hover:text-accent-foreground ${
                size === "sm" ? "h-9 w-9" : "h-11 w-11"
              }`}
            >
              <Icon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
