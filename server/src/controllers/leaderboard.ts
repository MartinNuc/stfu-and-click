import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard-entry';
import datasource from '../datasource';

export async function getAll(): Promise<LeaderboardEntry[]> {
  const clicks = await datasource.getAllTeamsScore();
  const copy = clicks.slice();
  copy.sort((a, b) => b.clicks - a.clicks);

  return copy.map((click, index) => ({
    clicks: click.clicks,
    team: click.team,
    order: index + 1,
  }));
}
