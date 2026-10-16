// PlayZone eSports — global site configuration
// REAL (do not change): socials, email, about copy. ⚠️ PLACEHOLDER: whatsappNumber.

export interface SocialLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  /** Official About copy from the PlayZone eSports channel — REAL, do not change. */
  about: string;
  /** Discord is the PRIMARY community CTA — all tournament/room announcements happen here. */
  discordUrl: string;
  /** WhatsApp number for the join form, digits only, no "+". PLACEHOLDER — replace with Prosen's real number. */
  whatsappNumber: string;
  email: string;
  socials: SocialLink[];
  stats: StatItem[];
}

export const siteConfig: SiteConfig = {
  name: "PlayZone eSports",
  tagline: "India's grassroots battleground for Battle Royale & shooter talent.",
  about:
    "Welcome to PlayZone Esports. OUR AIM: to showcase the best teams, clans and players all over India — fighting against each other to build smooth esports careers and win official tournaments. We organize FREE T2/T3 daily tournaments plus PAID tournaments. There are many underdogs who need to show their skills to the public — through our custom rooms you can do exactly that, because we LIVE STREAM every custom on YouTube. Free tournaments are organized TWICE A WEEK. You can fully trust us. Whenever a tournament or room is organized, you will be informed on our Discord server. || Jai Hind ||",
  discordUrl: "https://discord.gg/fWuchPP",
  whatsappNumber: "91XXXXXXXXXX", // PLACEHOLDER — replace with real number
  email: "contact@playzoneesports.com",
  socials: [
    { label: "Discord", href: "https://discord.gg/fWuchPP" },
    { label: "YouTube", href: "https://www.youtube.com/@playzoneesports" },
    { label: "Instagram", href: "https://instagram.com/ig_playzone_esports" },
    { label: "Email", href: "mailto:contact@playzoneesports.com" },
  ],
  stats: [
    { label: "YouTube Subscribers", value: "152" },
    { label: "Free Tournaments / Week", value: "2" },
    { label: "Paid Tiers", value: "T2 / T3" },
    { label: "Active Since", value: "12 Feb 2020" },
  ],
};
