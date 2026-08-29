import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO } from "@/data/site";

const NAV = [
  { href: "#home", label: "முகப்பு" },
  { href: "#about", label: "அறிமுகம்" },
  { href: "#mission", label: "எமது நோக்கம்" },
  { href: "#schedule", label: "நிகழ்ச்சி நிரல்" },
  { href: "#gallery", label: "படத்தொகுப்பு" },
  { href: "#team", label: "இயக்குனர்" },
  { href: "#contact", label: "தொடர்பு" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={LOGO}
            alt="இன்னிசை வானொலி அதிகாரப்பூர்வ சின்னம்"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-accent"
          />
          <span className="leading-tight">
            <span className="block text-base font-bold text-primary">இன்னிசை வானொலி</span>
            <span className="block text-xs text-muted-foreground">இசையின் சங்கமம்</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="பட்டியல்"
          aria-expanded={open}
          className="rounded-md border border-border p-2 text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
