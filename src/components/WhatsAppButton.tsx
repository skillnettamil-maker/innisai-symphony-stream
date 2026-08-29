import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp மூலம் தொடர்பு கொள்ள"
      className="fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-primary/90"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
