// PlayZone eSports — gallery
// The Gallery component renders a CSS/SVG-generated visual per `variant`.
// Titles and captions should read like real event photos.

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  variant: "amber" | "red" | "blue" | "green" | "purple" | "steel";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-s1-grand-finals",
    title: "S1 Grand Finals — Erangel",
    caption:
      "The final circle shrinks on Erangel as 4 squads fight for the ₹10,000 Showdown S1 trophy.",
    variant: "amber",
  },
  {
    id: "g-monsoon-cup-celebration",
    title: "Monsoon Cup Trophy Moment",
    caption:
      "Team Havoc lifts the Monsoon Cup '26 after a 3-chicken-dinner grand final — ₹15,000 champions.",
    variant: "red",
  },
  {
    id: "g-night-hunters-custom",
    title: "Night Hunters Custom Room",
    caption:
      "Midnight lobby madness — 48 squads queued for the Night Hunters #8 T2 paid custom.",
    variant: "blue",
  },
  {
    id: "g-rising-stars-trophy",
    title: "Rising Stars S3 Champions",
    caption:
      "Silent Strikers' podium moment at Rising Stars S3, the tournament that put them on the map.",
    variant: "green",
  },
  {
    id: "g-live-stream-setup",
    title: "Live Stream — Casters Desk",
    caption:
      "Our Hindi/English shoutcasters run the observer stream live on YouTube every tournament night.",
    variant: "purple",
  },
  {
    id: "g-community-meetup",
    title: "PlayZone Community Meetup",
    caption:
      "Squads from North Bengal meet IRL — watch parties, practice scrims, and plans for the Mega T3 Finals.",
    variant: "steel",
  },
];
