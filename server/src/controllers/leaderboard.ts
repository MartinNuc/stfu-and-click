import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard-entry';
import datasource from '../datasource';
import { TeamClickRecord } from '../datasource/schema';

export async function getAll(): Promise<LeaderboardEntry[]> {
  const teamScores = await datasource.getAllTeamsScore();
  sortByClickCount(teamScores);

  return teamScores.map((click, index) => ({
    clicks: click.clicks,
    team: click.team,
    order: index + 1,
  }));
}

function sortByClickCount(clicks: TeamClickRecord[]) {
  clicks.sort((a, b) => b.clicks - a.clicks);
}