import { Leaderboard } from 'stfu-and-click-shared/src/leaderboard';
import { createSelector } from 'reselect';
import { RootState } from 'store';
import { OutputSelector, CombinedState } from '@reduxjs/toolkit';
import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard';

export const getMyTeamName = (state: RootState) => state.game.myTeam;
export const getLeaderboard = (state: RootState) =>
  state.leaderboard.leaderboard;

/**
 * This selector returns scores around my team
 * @param minCount minimum items to return
 */
export function selectTeamsAround(
  minCount: number,
): ReturnTypeForSelectTeamsAround {
  return createSelector(
    [getMyTeamName, getLeaderboard],
    (myTeam, leaderboard) => {
      const myTeamIndex = leaderboard.findIndex((item) => item.team === myTeam);

      let leftIndex = Math.max(0, myTeamIndex - (minCount - 1) / 2);
      const rightIndex = Math.min(leaderboard.length, leftIndex + minCount);

      // difference is >0 when we are at the end of the array - means we have to move left index back
      const difference = rightIndex - leftIndex - minCount;
      leftIndex = Math.max(0, leftIndex + difference);
      
      const teamsAroundMyTeam = leaderboard.slice(leftIndex, rightIndex);
      return teamsAroundMyTeam;
    },
  );
}

type ReturnTypeForSelectTeamsAround = OutputSelector<
  CombinedState<{
    leaderboard: {
      error: string | null;
      isLoading: boolean;
      leaderboard: Leaderboard;
    };
    game: {
      error: string | null;
      myClicks: number;
      myTeam: string | null;
      session: string;
    };
  }>,
  LeaderboardEntry[],
  (res1: string | null, res2: Leaderboard) => Leaderboard
>;
