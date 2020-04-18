import { Team } from "./team";

export type LeaderboardEntry = {
  order: number;
  team: Team;
  clicks: number;
}