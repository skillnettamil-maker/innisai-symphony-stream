import { createFileRoute } from "@tanstack/react-router";
import { Crown, Handshake, Phone, Radio, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LiveRadioPlayer } from "@/components/LiveRadioPlayer";
import { ProgrammeSchedule } from "@/components/ProgrammeSchedule";
import { GallerySlider } from "@/components/GallerySlider";
import { SectionTitle } from "@/components/SectionTitle";
import { SocialLinks } from "@/components/SocialLinks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  ABOUT_PARAGRAPHS,
  DIRECTOR,
  GALLERY_SETS,
  LOGO,
  MISSION,
  SPONSORS,
  WEEKDAY_SCHEDULE,
  WEEKEND_SCHEDULE,
  WHATSAPP_NUMBER,
} from "@/data/site";

const TITLE = "இன்னிசை வானொலி – இசையின் சங்கமம்";
const DESCRIPTION =
  "இன்னிசை வானொலி – இசையின் சங்கமம். நேரலை இணையவழி தமிழ் வானொலி, முழுமையான நிகழ்ச்சி நிரல், RJ அறிமுகங்கள் மற்றும் படத்தொகுப்பு.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({
  id,
  children,
  tinted = false,
}: {
  id: string;
  children: React.ReactNode;
  tinted?: boolean;
}) {
  return (
    <section id={id} className={tinted ? "bg-secondary/40" : "bg-background"}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main>
        {/* Hero */}
        <section id="home" className="border-b border-border bg-secondary/40">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center lg:text-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-card px-3 py-1 text-xs font-medium text-accent-foreground">
                <Radio className="h-3.5 w-3.5" /> இணையவழி தமிழ் வானொலி
              </span>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight text-primary sm:text-5xl">
                இன்னிசை வானொலி
              </h1>
              <p className="mt-3 text-xl font-semibold text-accent-foreground sm:text-2xl">
                இசையின் சங்கமம்
              </p>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
                இசையையும் இனிய குரல்களையும் ஒன்றிணைத்து நேயர்களின் இதயங்களை மகிழ்விக்கும் வானொலி.
              </p>
              <div className="mt-7">
                <LiveRadioPlayer />
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={LOGO}
                alt="இன்னிசை வானொலி அதிகாரப்பூர்வ சின்னம்"
                width={420}
                height={420}
                className="w-56 rounded-full object-cover shadow-[var(--shadow-soft)] ring-4 ring-accent sm:w-72 lg:w-80"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about">
          <SectionTitle title="அறிமுகம்" />
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-base leading-relaxed text-foreground">
            {ABOUT_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        {/* Mission */}
        <Section id="mission" tinted>
          <SectionTitle title="எமது நோக்கம்" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MISSION.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Schedule */}
        <Section id="schedule">
          <SectionTitle title="நிகழ்ச்சி நிரல்" />
          <div className="mt-8">
            <ProgrammeSchedule
              tabs={[
                {
                  id: "weekday",
                  label: "திங்கள் – வெள்ளி",
                  programmes: WEEKDAY_SCHEDULE,
                },
                {
                  id: "weekend",
                  label: "சனி & ஞாயிறு",
                  programmes: WEEKEND_SCHEDULE,
                },
              ]}
            />
          </div>
        </Section>

        {/* Gallery */}
        <Section id="gallery" tinted>
          <SectionTitle title="படத்தொகுப்பு" subtitle="நிகழ்ச்சி மற்றும் RJ அறிமுகங்கள்" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {GALLERY_SETS.map((set) => (
              <GallerySlider key={set.id} title={set.title} images={set.images} />
            ))}
          </div>
        </Section>

        {/* Director & Sponsors */}
        <Section id="team">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <Crown className="mx-auto h-8 w-8 text-accent" />
              <h2 className="mt-3 text-xl font-bold text-primary">வானொலி இயக்குனர்</h2>
              <p className="mt-4 text-lg font-semibold text-foreground">{DIRECTOR.name}</p>
              <p className="text-sm text-muted-foreground">{DIRECTOR.note}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <Handshake className="mx-auto h-8 w-8 text-accent" />
              <h2 className="mt-3 text-xl font-bold text-primary">அனுசரணையாளர்கள்</h2>
              <p className="mt-4 text-sm text-muted-foreground">🇱🇰 {SPONSORS.intro}</p>
              <ul className="mt-3 flex flex-wrap justify-center gap-2">
                {SPONSORS.names.map((name) => (
                  <li
                    key={name}
                    className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" tinted>
          <SectionTitle title="தொடர்புக்கு" />
          <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-5 rounded-2xl border border-border bg-card p-6 text-center">
            <p className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Phone className="h-5 w-5 text-accent" /> WhatsApp: {WHATSAPP_NUMBER}
            </p>
            <SocialLinks />
          </div>
        </Section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
