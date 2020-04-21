import reducer, {
  initialState,
  joinTeam,
  clickSuccess,
  clickFailed,
  click,
} from './gameSlice';
import { initialState as leaderboardInitialState } from './leaderboardSlice';
import { updateTeamScore } from './leaderboardSlice';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Leaderboard slide', () => {
  describe('Reducers', () => {
    test('it should be able to join team', () => {
      const team = 'Bulanci';
      const nextState = reducer(initialState, joinTeam(team));
      expect(nextState.myTeam).toBe(team);
    });

    test('it should update click count after sending click to the server', () => {
      const newClickCount = 10;
      const nextState = reducer(initialState, clickSuccess(newClickCount));
      expect(nextState.myClicks).toBe(newClickCount);
    });

    test('it should set error state when the click request fails', () => {
      const err = new Error('Network error');
      const nextState = reducer(initialState, clickFailed(err.toString()));
      expect(nextState.error).toBe('Error: Network error');
    });
  });

  describe('Actions', () => {
    test('it should send click to the server', async () => {
      const serverResponse = {
        yourClicks: 25,
        teamClicks: 50,
      };
      mockedAxios.post.mockResolvedValue({ data: serverResponse });
      const expectedActions = [
        {
          type: clickSuccess.type,
          payload: serverResponse.yourClicks,
        },
        {
          type: updateTeamScore.type,
          payload: {
            team: 'Bulanci',
            clicks: serverResponse.teamClicks,
          },
        },
      ];
      const mockStore = configureMockStore([thunk]);
      const store = mockStore({
        game: {
          ...initialState,
          myTeam: 'Bulanci',
          session: 'abc123',
        },
        leaderboard: leaderboardInitialState,
      });

      await store.dispatch(click());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
