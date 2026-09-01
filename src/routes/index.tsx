import { createFileRoute } from "@tanstack/react-router";
import {
  Crown,
  Globe,
  Handshake,
  Headphones,
  Heart,
  Mic,
  Phone,
  Radio,
  Sparkles,
  Users,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { LiveRadioPlayer } from "@/components/LiveRadioPlayer";
import { ProgrammeCard } from "@/components/ProgrammeCard";
import { ProgrammeSchedule } from "@/components/ProgrammeSchedule";
import { GallerySlider } from "@/components/GallerySlider";
import { SectionTitle } from "@/components/SectionTitle";
import { SocialLinks } from "@/components/SocialLinks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroRadioAtmosphere from "@/assets/hero-radio-atmosphere.jpg";
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
import type { Programme } from "@/data/site";


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

const FEATURE_ICONS = [Users, Mic, Globe, Headphones, Heart];

const RJ_HIGHLIGHTS: Programme[] = [
  WEEKDAY_SCHEDULE[6],
  WEEKEND_SCHEDULE[0],
  WEEKEND_SCHEDULE[4],
  WEEKDAY_SCHEDULE[7],
  WEEKDAY_SCHEDULE[3],
].filter((p): p is Programme => Boolean(p));


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
    <section id={id} className={tinted ? "bg-lilac" : "bg-background"}>
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden border-b border-border bg-lilac"
        >
          <img
            src={heroRadioAtmosphere}
            alt=""
            aria-hidden="true"
            width={1920}
            height={900}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[72%_center] opacity-55 sm:object-[68%_center] sm:opacity-65 lg:object-center lg:opacity-90"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_88%,transparent)_42%,color-mix(in_oklab,var(--background)_18%,transparent)_72%,transparent_100%)] lg:bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_78%,transparent)_36%,transparent_68%)]" />
          <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="text-center lg:text-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-card px-4 py-1.5 text-xs font-semibold text-accent-foreground">
                <Radio className="h-3.5 w-3.5" /> இணையவழி தமிழ் வானொலி
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight text-primary sm:text-6xl xl:text-7xl">
                இன்னிசை வானொலி
              </h1>
              <p className="mt-3 flex items-center justify-center gap-4 text-2xl font-bold text-accent-foreground sm:text-3xl lg:justify-start">
                இசையின் சங்கமம்
                <span className="hidden h-px w-24 bg-accent sm:block" />
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg lg:mx-0">
                இசையையும் இனிய குரல்களையும் ஒன்றிணைத்து நேயர்களின் இதயங்களை மகிழ்விக்கும் வானொலி.
              </p>
              <div className="mt-8 max-w-2xl">
                <LiveRadioPlayer />
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={LOGO}
                alt="இன்னிசை வானொலி அதிகாரப்பூர்வ சின்னம்"
                width={520}
                height={520}
                className="w-64 rounded-full object-cover shadow-[var(--shadow-card)] ring-[6px] ring-accent/70 sm:w-80 lg:w-[26rem]"
              />
            </div>
          </div>

          {/* Feature strip */}
          <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-10 sm:px-6 lg:px-8">
            <ul
              className="grid gap-1 rounded-2xl p-3 shadow-[var(--shadow-card)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
              style={{ backgroundImage: "var(--gradient-royal)" }}
            >
              {MISSION.map((item, i) => (
                <FeatureCard key={item} icon={FEATURE_ICONS[i] ?? Sparkles} text={item} />
              ))}
            </ul>
          </div>
        </section>

        {/* RJs & நிகழ்வுகள் */}
        <Section id="rjs">
          <SectionTitle title="எங்கள் RJs & நிகழ்வுகள்" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {RJ_HIGHLIGHTS.map((p) => (
              <ProgrammeCard key={`${p.time}-${p.name}`} programme={p} featured />
            ))}
          </div>
        </Section>

        {/* About */}
        <Section id="about" tinted>
          <SectionTitle title="அறிமுகம்" />
          <div className="mx-auto mt-10 max-w-4xl space-y-5 rounded-3xl border border-border bg-card p-6 text-center text-base leading-relaxed text-foreground shadow-[var(--shadow-card)] sm:p-10 sm:text-lg">
            {ABOUT_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        {/* Mission */}
        <Section id="mission">
          <SectionTitle title="எமது நோக்கம்" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MISSION.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Sparkles className="h-5 w-5" />
                </span>
                <span className="min-w-0 text-base leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Schedule */}
        <Section id="schedule" tinted>
          <SectionTitle title="நிகழ்ச்சி நிரல்" />
          <div className="mt-10">
            <ProgrammeSchedule
              tabs={[
                { id: "weekday", label: "திங்கள் – வெள்ளி", programmes: WEEKDAY_SCHEDULE },
                { id: "weekend", label: "சனி & ஞாயிறு", programmes: WEEKEND_SCHEDULE },
              ]}
            />
          </div>
        </Section>

        {/* Gallery */}
        <Section id="gallery">
          <SectionTitle title="படத்தொகுப்பு" subtitle="நிகழ்ச்சி மற்றும் RJ அறிமுகங்கள்" />
          <div className="mt-10 space-y-6">
            {GALLERY_SETS.map((set) => (
              <GallerySlider key={set.id} title={set.title} images={set.images} maxPerView={3} />
            ))}
          </div>
        </Section>

        {/* Director, Sponsors, Contact */}
        <Section id="team" tinted>
          <div className="grid gap-6 lg:grid-cols-3">
            <div
              className="rounded-3xl p-8 text-center text-primary-foreground shadow-[var(--shadow-card)]"
              style={{ backgroundImage: "var(--gradient-royal)" }}
            >
              <Crown className="mx-auto h-9 w-9 text-gold" />
              <h2 className="mt-4 text-xl font-extrabold">வானொலி இயக்குனர்</h2>
              <p className="mt-5 text-lg font-bold">{DIRECTOR.name}</p>
              <p className="text-sm text-primary-foreground/80">{DIRECTOR.note}</p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
              <Handshake className="mx-auto h-9 w-9 text-accent" />
              <h2 className="mt-4 text-xl font-extrabold text-primary">அனுசரணையாளர்கள்</h2>
              <p className="mt-5 text-sm text-muted-foreground">🇱🇰 {SPONSORS.intro}</p>
              <ul className="mt-4 flex flex-wrap justify-center gap-2">
                {SPONSORS.names.map((name) => (
                  <li
                    key={name}
                    className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="contact"
              className="scroll-mt-24 rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]"
            >
              <Phone className="mx-auto h-9 w-9 text-accent" />
              <h2 className="mt-4 text-xl font-extrabold text-primary">தொடர்புக்கு</h2>
              <p className="mt-5 text-base font-bold text-foreground">
                WhatsApp: {WHATSAPP_NUMBER}
              </p>
              <div className="mt-5 flex justify-center">
                <SocialLinks />
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
