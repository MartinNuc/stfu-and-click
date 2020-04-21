import { ClickRequest, ClickResponse } from 'stfu-and-click-shared/src/click';
import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard';
import axios from 'axios';

export async function click(request: ClickRequest): Promise<ClickResponse> {
  const response = await axios.post('/api/v1/click', request);
  return response.data;
}

export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  const response = await axios.get('/api/v1/leaderboard');
  return response.data;
}