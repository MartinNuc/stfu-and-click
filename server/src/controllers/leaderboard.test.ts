import { mocked } from 'ts-jest/utils';
import datasource from '../datasource';
import { getAll } from './leaderboard';

jest.mock('../datasource');
const mockedDb = mocked(datasource, true);

describe('Unit:LeaderboardController', () => {
  jest.spyOn(mockedDb, 'getAllTeamsScore').mockResolvedValue([
    {
      team: 'second',
      clicks: 10,
    },
    {
      team: 'first',
      clicks: 20,
    },
    {
      team: 'third',
      clicks: 1,
    },
  ]);

  it(`should sort teams by the score`, async () => {
    const leaderboard = await getAll();
    expect(leaderboard[0].team).toBe('first');
    expect(leaderboard[1].team).toBe('second');
    expect(leaderboard[2].team).toBe('third');
  });

  it(`should assign order for each team`, async () => {
    const leaderboard = await getAll();
    expect(leaderboard[0].order).toBe(1);
    expect(leaderboard[1].order).toBe(2);
    expect(leaderboard[2].order).toBe(3);
  });
});
