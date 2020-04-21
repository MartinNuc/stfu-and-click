import { Leaderboard } from 'stfu-and-click-shared/src/leaderboard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './index';
import { fetchLeaderboard as apiFetchLeaderboard } from 'api';
import { Team } from 'stfu-and-click-shared/src/team';

type TeamScoreUpdate = {
  team: Team;
  clicks: number;
};

export const initialState = {
  error: null as string | null,
  isLoading: false,
  leaderboard: [] as Leaderboard,
};

const slice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    fetchLeaderboardSucess(state, action: PayloadAction<Leaderboard>) {
      state.leaderboard = action.payload;
      state.isLoading = false;
    },
    fetchLeaderboardFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    updateTeamScore(
      state,
      { payload: { clicks, team } }: PayloadAction<TeamScoreUpdate>,
    ) {
      state.leaderboard = updateTeamInLeaderboard(
        state.leaderboard,
        team,
        clicks,
      );
    },
  },
});

export const {
  startLoading,
  fetchLeaderboardSucess,
  fetchLeaderboardFailed,
  updateTeamScore,
} = slice.actions;
export default slice.reducer;

export const fetchLeaderboard = (): AppThunk => async (dispatch) => {
  let leaderboard: Leaderboard;
  try {
    dispatch(startLoading());
    leaderboard = await apiFetchLeaderboard();
  } catch (err) {
    dispatch(fetchLeaderboardFailed(err.toString()));
    return;
  }
  dispatch(fetchLeaderboardSucess(leaderboard));
};

function updateTeamInLeaderboard(
  leaderboard: Leaderboard,
  team: Team,
  clicks: number,
) {
  // when team is not in our leaderboard lets add it to the end.
  // This may happen when we receive score update by socket.io in future
  if (leaderboard.findIndex((item) => item.team === team) === -1) {
    leaderboard.push({
      team,
      clicks,
      order: leaderboard.length,
    });
  }

  // update score
  leaderboard = leaderboard.map((item) => {
    if (item.team === team) {
      return {
        ...item,
        clicks,
      };
    } else {
      return item;
    }
  });

  // sort by score
  leaderboard.sort((a, b) => b.clicks - a.clicks);

  // update order
  leaderboard = leaderboard.map((item, index) => ({
    ...item,
    order: index + 1,
  }));
  return leaderboard;
}
