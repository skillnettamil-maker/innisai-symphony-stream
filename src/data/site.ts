export const STREAM_URL = "https://innisaifm-prabak78.radioca.st/stream";
export const WHATSAPP_NUMBER = "+94 765 745 932";
export const WHATSAPP_LINK = "https://wa.me/94765745932";

export type NavLink = { href: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { href: "#home", label: "முகப்பு" },
  { href: "#about", label: "அறிமுகம்" },
  { href: "#mission", label: "எமது நோக்கம்" },
  { href: "#schedule", label: "நிகழ்ச்சி நிரல்" },
  { href: "#rjs", label: "RJs & நிகழ்வுகள்" },
  { href: "#gallery", label: "படத்தொகுப்பு" },
  { href: "#team", label: "இயக்குனர்" },
  { href: "#contact", label: "தொடர்புக்கு" },
];


export const SOCIAL_LINKS = [
  { label: "Facebook", url: "https://www.facebook.com/share/1HnJ7FH18d/" },
  {
    label: "Instagram",
    url: "https://www.instagram.com/innisai_vanoli?igsi=MTEzbWR4ZXR0dWtzMg==",
  },
  {
    label: "YouTube",
    url: "https://youtube.com/channel/UCoqutiQgZdpkJ-Io6eEdXNA?si=XnZzSX05ps_ILlIV",
  },
  { label: "TikTok", url: "https://www.tiktok.com/@innisai0?_r=1&_t=ZS-99FmDSj7NxM" },
] as const;

export const ABOUT_PARAGRAPHS = [
  "28.05.2026 – வியாழக்கிழமை அன்று தனது இனிய பயணத்தைத் தொடங்கிய இன்னிசை வானொலி, இசையையும் இனிய குரல்களையும் ஒன்றிணைத்து நேயர்களின் இதயங்களை மகிழ்விக்கும் இணையவழி வானொலியாக திகழ்கிறது.",
  "இசை என்பது வெறும் பொழுதுபோக்கு மட்டுமல்ல...",
  "அது மனதை வருடும் ஒரு மொழி.",
  "அந்த இசை மொழியை ஒவ்வொரு நாளும் உங்கள் இல்லங்களுக்கும் இதயங்களுக்கும் கொண்டு சேர்ப்பதே இன்னிசை வானொலியின் நோக்கம். 🎶❤️",
];

export const MISSION = [
  "புதிய அறிவிப்பாளர்களை உருவாக்குதல்",
  "திறமையான அறிவிப்பாளர்களுக்கு வாய்ப்பளித்தல்",
  "உலகெங்கும் உள்ள நேய சொந்தங்களை இணைத்துக்கொள்ளுதல்",
  "இசை, பொழுதுபோக்கு மற்றும் பயனுள்ள நிகழ்ச்சிகளை வழங்குதல்",
  "நேயர்களின் விருப்பங்களையும் உணர்வுகளையும் மதித்து செயல்படுதல்",
];

export type Programme = { time: string; part: string; name: string; rj: string };

export const WEEKDAY_SCHEDULE: Programme[] = [
  { time: "06.00 – 07.00", part: "காலை", name: "உற்சாகம் பேசும் தென்றல்", rj: "RJ கீர்த்தி" },
  { time: "07.00 – 08.00", part: "காலை", name: "புத்தம் புது காலை", rj: "RJ யுகன்" },
  { time: "08.00 – 10.00", part: "காலை", name: "காலை தென்றல்", rj: "RJ சிரோனி & RJ VJ ரூபன்" },
  { time: "10.00 – 11.00", part: "காலை", name: "இன்றைய வாழ்க்கை தத்துவம்", rj: "RJ ஜெயா" },
  { time: "11.00 – 12.00", part: "காலை", name: "மனமே எழுந்திரு", rj: "RJ நிஷா" },
  { time: "12.00 – 02.00", part: "பகல்", name: "80/90 ஞாபகங்கள்", rj: "RJ மணிமேனகா" },
  { time: "02.00 – 04.00", part: "பகல்", name: "🎙️ ராகம் சுகமானது", rj: "RJ பிரியா" },
  { time: "04.00 – 06.00", part: "பகல்", name: "கேள்விக்கு என்ன பதில்", rj: "RJ சரஸ்வதி" },
  { time: "06.00 – 08.00", part: "மாலை", name: "காலத்தை கடந்த பாடல்கள்", rj: "RJ யாஸ்" },
  { time: "08.00 – 10.00", part: "இரவு", name: "கவிதையோடு ஒரு பயணம்", rj: "RJ ரோசி & சித்ரா& ஹிலா" },
  { time: "10.00 – 11.00", part: "இரவு", name: "மௌனத்தின் மொழிகள்", rj: "RJ நிஷான்" },
];

export const WEEKEND_SCHEDULE: Programme[] = [
  { time: "06.00 – 07.00", part: "காலை", name: "மாருதம்", rj: "RJ நந்தினி" },
  { time: "07.00 – 08.00", part: "காலை", name: "இனிய விடியல்", rj: "RJ யுகன்" },
  { time: "08.00 – 10.00", part: "காலை", name: "கலக்கல் காலை", rj: "RJ நிஷா" },
  { time: "10.00 – 12.00", part: "காலை", name: "விடுமுறை கொண்டாட்டம்", rj: "RJ மணிமேகனா & RJ சித்ரா" },
  { time: "12.00 – 02.00", part: "பகல்", name: "இசை விருந்து", rj: "RJ சில்வஸ்டர்" },
  { time: "02.00 – 04.00", part: "பகல்", name: "பலகழாம் வாங்க", rj: "RJ இருதயராஜா" },
  { time: "04.00 – 06.00", part: "பகல்", name: "தேனீர் நேர இசை", rj: "RJ குனா" },
  { time: "05.00 – 06.00", part: "மாலை", name: "மனதிற்கு பிடித்த பாடல்கள்", rj: "RJ மணிமேகனா" },
  { time: "06.00 – 07.00", part: "மாலை", name: "தென்திசை காற்று", rj: "RJ திவி" },
  { time: "07.00 – 08.00", part: "இரவு", name: "கருத்து மோதல்", rj: "RJ VJ ரூபன்" },
  { time: "08.00 – 10.00", part: "இரவு", name: "நிலாச்சோறு", rj: "RJ பிரியா" },
  { time: "10.00 – 11.00", part: "இரவு", name: "இதயத்தோடு இன்னிசை", rj: "RJ அருள்காந்தன்" },
];

export const DIRECTOR = {
  name: "முத்துகிருஷ்ணன் லிலித்மாரி",
  note: "(சிரோனி – HR)",
};

export const SPONSORS = {
  intro: "இலங்கையைச் சேர்ந்த",
  names: ["பார்திபன்", "புவேந்திரன்", "யோகா"],
};

export const CLOSING_LINES = [
  "🎶 இன்னிசை வானொலி – இசையின் சங்கமம் 🎶",
  "உங்கள் இதயத்தில் ஒலிக்கும் இசை...",
  "உங்கள் உணர்வுகளை இணைக்கும் குரல்...",
  "என்றும் உங்கள் அன்புடன் — இன்னிசை வானொலி! ❤️📻🎶",
];

const img = (n: number) => `/images/img${String(n).padStart(2, "0")}.jpg`;

export const LOGO = img(1);

/** `folder` maps to a folder under /gallery/ scanned by the PHP endpoint at runtime. */
export type GallerySet = { id: string; title: string; images: string[]; folder?: string };

export const GALLERY_SETS: GallerySet[] = [
  {
    id: "slider-01",
    title: "எங்கள் RJ நட்சத்திரங்கள்",
    folder: "rj-stars",
    images: [1, 2, 4, 5, 7, 8, 9, 12, 14, 16, 17, 18, 20, 21, 23, 24, 25, 27, 30, 31, 32].map(img),
  },
  {
    id: "slider-02",
    title: "எங்களின் நட்சத்திரக் குரல்கள்",
    folder: "rj-voices",
    images: [6, 11, 13, 22, 28, 29, 33, 35].map(img),
  },
  {
    id: "slider-03",
    title: "RJ நட்சத்திரங்கள்",
    folder: "rj-special",
    images: [3, 15, 19, 34].map(img),
  },
  {
    id: "slider-04",
    title: "நிலைய அடையாளம்",
    images: [10].map(img),
  },
];
