import { Team } from 'stfu-and-click-shared/src/team';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as generateRandomUuid } from 'uuid';

const initialState = {
  error: null as string | null,
  myClicks: 0,
  teamClicks: 0,
  myTeam: null as Team | null,
  session: generateRandomUuid(),
};

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeGame(state, action: PayloadAction<Team>) {
      state.myTeam = action.payload;
      state.session = generateRandomUuid();
    },
    click(state) {
      state.myClicks++;
    }
  },
});

export const { initializeGame, click } = slice.actions;
export default slice.reducer;