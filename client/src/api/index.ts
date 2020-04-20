import { ClickRequest, ClickResponse } from 'stfu-and-click-shared/src/click';
import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard-entry';

export async function click(request: ClickRequest): Promise<ClickResponse> {
  const response = await fetch('/api/v1/click');
  return response.json();
}

export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  const response = await fetch('/api/v1/leaderboard');
  return response.json();
}