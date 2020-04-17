import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard-entry';
import { clicks, ClickRecord } from './../db/index';

export function getAll(): LeaderboardEntry[] {
  // aggregate clicks by team
  const aggregatedClicksMap = clicks.reduce((acc, click) => {
    const teamsCurrentClicks = acc.get(click.team);
    if (typeof teamsCurrentClicks === 'undefined') {
      acc.set(click.team, click);
    } else {
      acc.set(click.team, {
        ...teamsCurrentClicks,
        clicks: teamsCurrentClicks.clicks + click.clicks,
      });
    }
    return acc;
  }, new Map<string, ClickRecord>());

  const aggregatedClicks = Array.from(aggregatedClicksMap.values());
  aggregatedClicks.sort((a, b) => b.clicks - a.clicks);
  
  return aggregatedClicks.map((click, index) => ({
    clicks: click.clicks,
    team: click.team,
    order: index + 1,
  }));
}
