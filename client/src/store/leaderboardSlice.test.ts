import { Leaderboard } from 'stfu-and-click-shared/src/leaderboard';
import reducer, {
  initialState,
  startLoading,
  updateTeamScore,
  fetchLeaderboard,
  fetchLeaderboardSucess,
} from './leaderboardSlice';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';

const mockedAxios = axios as jest.Mocked<typeof axios>;

const leaderboard: Leaderboard = [
  {
    order: 1,
    team: 'team1',
    clicks: 5,
  },
  {
    order: 2,
    team: 'team2',
    clicks: 4,
  },
];

describe('Leaderboard slide', () => {
  describe('Reducers', () => {
    test('it should mark loading state', () => {
      expect(initialState.isLoading).toBe(false);
      const nextState = reducer(initialState, startLoading());
      expect(nextState.isLoading).toBe(true);
    });

    test('it should update a team which is already present in the leaderboard', () => {
      const state: typeof initialState = {
        ...initialState,
        leaderboard,
      };
      const nextState = reducer(
        state,
        updateTeamScore({ team: 'team2', clicks: 6 }),
      );
      expect(nextState.leaderboard[0]).toEqual({
        order: 1,
        team: 'team2',
        clicks: 6,
      });
      expect(nextState.leaderboard[1]).toEqual({
        order: 2,
        team: 'team1',
        clicks: 5,
      });
    });

    test('it should add a team which missing in the leaderboard', () => {
      const state: typeof initialState = {
        ...initialState,
        leaderboard,
      };
      const nextState = reducer(
        state,
        updateTeamScore({ team: 'team3', clicks: 6 }),
      );
      expect(nextState.leaderboard[0]).toEqual({
        order: 1,
        team: 'team3',
        clicks: 6,
      });
      expect(nextState.leaderboard[1]).toEqual({
        order: 2,
        team: 'team1',
        clicks: 5,
      });
      expect(nextState.leaderboard[2]).toEqual({
        order: 3,
        team: 'team2',
        clicks: 4,
      });
    });
  });
  describe('Actions', () => {
    test('it should fetch the leaderboard from server', async () => {
      mockedAxios.get.mockResolvedValue({ data: leaderboard });
      const expectedActions = [
        {
          type: startLoading.type,
          payload: undefined,
        },
        {
          type: fetchLeaderboardSucess.type,
          payload: leaderboard,
        },
      ];
      const mockStore = configureMockStore([thunk]);
      const store = mockStore(initialState);

      await store.dispatch(fetchLeaderboard());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
