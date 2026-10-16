// PlayZone eSports — community teams
// Showcase squads from the community. IGN = in-game name, role = player's in-game role.

export interface Player {
  name: string;
  ign: string;
  role: string;
}

export interface Team {
  id: string;
  name: string;
  tag: string;
  game: string;
  players: Player[];
  achievements: string[];
}

export const teams: Team[] = [
  {
    id: "team-havoc",
    name: "Team Havoc",
    tag: "THVK",
    game: "BGMI",
    players: [
      { name: "Arjun Mehta", ign: "THVK丨RAZE", role: "Assaulter" },
      { name: "Rohan Das", ign: "THVK丨GHOST", role: "IGL (In-Game Leader)" },
      { name: "Kabir Singh", ign: "THVK丨BLAZE", role: "Sniper" },
      { name: "Dev Patel", ign: "THVK丨REAPER", role: "Support" },
    ],
    achievements: [
      "Winners — PlayZone Monsoon Cup '26",
      "Runners-up — PlayZone Night Hunters #8",
      "Top 8 — PlayZone Rising Stars S3",
    ],
  },
  {
    id: "silent-strikers",
    name: "Silent Strikers",
    tag: "SSTK",
    game: "BGMI",
    players: [
      { name: "Aditya Rao", ign: "SSTK丨VENOM", role: "IGL (In-Game Leader)" },
      { name: "Vikram Nair", ign: "SSTK丨HUNTER", role: "Assaulter" },
      { name: "Sahil Khan", ign: "SSTK丨STORM", role: "Sniper" },
      { name: "Ishan Verma", ign: "SSTK丨NOVA", role: "Support" },
    ],
    achievements: [
      "Winners — PlayZone Rising Stars S3",
      "Runners-up — PlayZone Monsoon Cup '26",
      "Back-to-back semi-finals — Arena Clash series",
    ],
  },
  {
    id: "night-raiders",
    name: "Night Raiders",
    tag: "NRDR",
    game: "BGMI",
    players: [
      { name: "Rahul Sharma", ign: "NRDR丨ACE", role: "Assaulter" },
      { name: "Karan Joshi", ign: "NRDR丨SHADOW", role: "IGL (In-Game Leader)" },
      { name: "Aryan Gupta", ign: "NRDR丨FALCON", role: "Sniper" },
      { name: "Nikhil Yadav", ign: "NRDR丨VIPER", role: "Support" },
    ],
    achievements: [
      "Winners — PlayZone Night Hunters #8",
      "Most Kills (squad) — PlayZone Mega T3 Semi-Finals",
    ],
  },
];
