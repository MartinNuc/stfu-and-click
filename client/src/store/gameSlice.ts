import { ClickResponse, ClickRequest } from './../../../shared/src/click';
import { AppThunk } from './index';
import { Team } from 'stfu-and-click-shared/src/team';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as generateRandomUuid } from 'uuid';
import { click as apiClick } from 'api';
import { updateTeamScore } from './leaderboardSlice';

export const initialState = {
  error: null as string | null,
  myClicks: 0,
  myTeam: null as Team | null,
  session: generateRandomUuid(),
};

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    joinTeam(state, action: PayloadAction<Team>) {
      /**
       * Generate new session when joining new team. This avoids higher 
       * your clicks than team clicks because server stores relation 
       * between click, user and team separated.
       */
      if (state.myTeam !== action.payload) {
        state.session = generateRandomUuid();
      }
      state.myTeam = action.payload;
    },
    clickSuccess(state, action: PayloadAction<number>) {
      state.myClicks = action.payload;
    },
    clickFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { joinTeam, clickSuccess, clickFailed } = slice.actions;
export default slice.reducer;

export const click = (): AppThunk => async (dispatch, getState) => {
  let response: ClickResponse;
  const { session, myTeam } = getState().game;
  if (!myTeam) {
    throw new Error('Team is required to participate.');
  }
  const params: ClickRequest = {
    session,
    team: myTeam,
  };

  // make api call
  try {
    response = await apiClick(params);
  } catch (err) {
    dispatch(clickFailed(err.toString()));
    return;
  }

  dispatch(clickSuccess(response.yourClicks));
  dispatch(updateTeamScore({ team: myTeam, clicks: response.teamClicks }));
};
