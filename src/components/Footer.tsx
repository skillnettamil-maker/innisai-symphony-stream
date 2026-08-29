import { ArrowUp } from "lucide-react";
import { CLOSING_LINES, LOGO, NAV_LINKS } from "@/data/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer
      className="text-primary-foreground"
      style={{ backgroundImage: "var(--gradient-royal)" }}
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="flex min-w-0 items-start gap-4">
          <img
            src={LOGO}
            alt="இன்னிசை வானொலி சின்னம்"
            className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-accent"
            loading="lazy"
          />
          <div className="min-w-0">
            <p className="text-lg font-extrabold">இன்னிசை வானொலி – இசையின் சங்கமம்</p>
            <div className="mt-2 space-y-1 text-sm text-primary-foreground/80">
              {CLOSING_LINES.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <nav>
          <p className="text-sm font-bold text-gold">பக்கங்கள்</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-primary-foreground/85">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-bold text-gold">சமூக வலைத்தளங்கள்</p>
          <div className="mt-3">
            <SocialLinks size="sm" />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-primary-foreground/75 sm:flex-row sm:px-6 lg:px-8">
          <p>© இன்னிசை வானொலி</p>
          <a href="#home" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
            <ArrowUp className="h-4 w-4" /> மேலே செல்ல
          </a>
        </div>
      </div>
    </footer>
  );
}
