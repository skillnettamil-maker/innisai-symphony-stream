import { CLOSING_LINES, LOGO } from "@/data/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-10 text-center">
        <img
          src={LOGO}
          alt="இன்னிசை வானொலி சின்னம்"
          className="h-16 w-16 rounded-full object-cover ring-2 ring-accent"
          loading="lazy"
        />
        <p className="text-lg font-bold text-primary">
          இன்னிசை வானொலி – இசையின் சங்கமம்
        </p>
        <div className="space-y-1 text-sm text-muted-foreground">
          {CLOSING_LINES.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <SocialLinks size="sm" />
        <p className="text-xs text-muted-foreground">© இன்னிசை வானொலி</p>
      </div>
    </footer>
  );
}
