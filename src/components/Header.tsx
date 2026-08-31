import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { LOGO, NAV_LINKS, WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 shadow-[0_2px_16px_-12px_oklch(0.32_0.14_303)] backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <a href="#home" className="flex shrink-0 items-center gap-3">
          <img
            src={LOGO}
            alt="இன்னிசை வானொலி அதிகாரப்பூர்வ சின்னம்"
            className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-accent"
          />
          <span className="leading-tight">
            <span className="block whitespace-nowrap text-base font-extrabold text-primary sm:text-lg">
              இன்னிசை வானொலி
            </span>
            <span className="block whitespace-nowrap text-xs text-muted-foreground">இசையின் சங்கமம்</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary 2xl:px-3 2xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-start text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90 md:inline-flex"
            style={{ backgroundImage: "var(--gradient-royal)" }}
          >
            <MessageCircle className="h-5 w-5 shrink-0 text-gold" />
            <span className="leading-tight">
              <span className="block text-[11px] opacity-80">WhatsApp</span>
              <span className="block whitespace-nowrap text-sm font-bold">{WHATSAPP_NUMBER}</span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="பட்டியல்"
            aria-expanded={open}
            className="rounded-md border border-border p-2 text-primary xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card xl:hidden">
          <ul className="mx-auto max-w-[1400px] px-4 py-2 sm:px-6">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-semibold text-foreground hover:bg-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp: {WHATSAPP_NUMBER}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
