import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import leaderboardReducer from './leaderboardSlice';

const rootReducer = combineReducers({
  leaderboard: leaderboardReducer
});
export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store;