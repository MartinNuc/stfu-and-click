import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard-entry';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './index';
import { fetchLeaderboard as apiFetchLeaderboard } from 'api';

type Leaderboard = LeaderboardEntry[];

const initialState = {
  error: '',
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
  },
});

export const {
  startLoading,
  fetchLeaderboardSucess,
  fetchLeaderboardFailed,
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
