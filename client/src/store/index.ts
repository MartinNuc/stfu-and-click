import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import leaderboardReducer from './leaderboardSlice';
import gameReducer from './gameSlice';

export const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
  game: gameReducer,
});
export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store;