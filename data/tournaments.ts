// PlayZone eSports — tournament data
// Upcoming tournaments appear in registration cards; past results feed the hall of fame.

export interface Tournament {
  id: string;
  name: string;
  game: string;
  date: string;
  time: string;
  prizePool: string;
  slotsTotal: number;
  slotsFilled: number;
  entryFee: string;
  status: "upcoming" | "live" | "completed";
  description: string;
}

export interface PastResult {
  id: string;
  tournamentName: string;
  date: string;
  winner: string;
  runnerUp: string;
  prizePool: string;
}

export const upcomingTournaments: Tournament[] = [
  {
    id: "t-showdown-s1",
    name: "PlayZone BGMI Showdown S1",
    game: "BGMI",
    date: "Saturday, 24 Oct 2026",
    time: "7:00 PM IST",
    prizePool: "₹10,000",
    slotsTotal: 64,
    slotsFilled: 41,
    entryFee: "Free Entry",
    status: "upcoming",
    description:
      "Our flagship weekly custom — 64 squads, Erangel + Miramar rotation, TDM practice room warm-up. Top 3 finishers qualify for the T3 paid lobby. Streamed live on YouTube with Hindi/English shoutcasters.",
  },
  {
    id: "t-arena-clash-12",
    name: "PlayZone Arena Clash #12",
    game: "BGMI",
    date: "Wednesday, 28 Oct 2026",
    time: "8:00 PM IST",
    prizePool: "₹5,000",
    slotsTotal: 48,
    slotsFilled: 48,
    entryFee: "₹50 per squad",
    status: "upcoming",
    description:
      "Mid-week paid lobby (T2) — smaller map pool, faster rotations, aggressive point system. Winner-takes-most split: ₹2,500 / ₹1,500 / ₹1,000. Room ID shared 15 minutes before start on Discord.",
  },
  {
    id: "t-mega-t3-qualifier",
    name: "PlayZone Mega T3 Qualifier",
    game: "BGMI",
    date: "Saturday, 31 Oct 2026",
    time: "6:00 PM IST",
    prizePool: "₹25,000",
    slotsTotal: 32,
    slotsFilled: 19,
    entryFee: "₹200 per squad",
    status: "upcoming",
    description:
      "The big one — top 8 squads from this qualifier enter the PlayZone Mega T3 Finals with a ₹1,00,000 prize pool. 5-match series across Erangel, Miramar and Sanhok. Professional observer stream, instant replays, and MVP award of the match.",
  },
];

export const pastResults: PastResult[] = [
  {
    id: "r-monsoon-cup-26",
    tournamentName: "PlayZone Monsoon Cup '26",
    date: "12 Sep 2026",
    winner: "Team Havoc (THVK)",
    runnerUp: "Silent Strikers (SSTK)",
    prizePool: "₹15,000",
  },
  {
    id: "r-night-hunters-8",
    tournamentName: "PlayZone Night Hunters #8",
    date: "29 Aug 2026",
    winner: "Night Raiders (NRDR)",
    runnerUp: "Team Havoc (THVK)",
    prizePool: "₹8,000",
  },
  {
    id: "r-rising-stars-s3",
    tournamentName: "PlayZone Rising Stars S3",
    date: "15 Aug 2026",
    winner: "Silent Strikers (SSTK)",
    runnerUp: "Iron Wolves (IRWL)",
    prizePool: "₹12,000",
  },
];
