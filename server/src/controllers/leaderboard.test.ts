import { mocked } from 'ts-jest/utils';
jest.mock('../db');

import * as db from '../db';
import { getAll } from './leaderboard';

const mockedDb = mocked(db, true);

describe('LeaderboardController', () => {
  mockedDb.getAllClickRecords.mockReturnValue([
    {
      team: 'applifting',
      session: 'abc123',
      clicks: 20,
    },
    {
      team: 'another team',
      session: 'Martin',
      clicks: 8,
    },
    {
      team: 'applifting',
      session: 'fhsleih34u2ufw',
      clicks: 5,
    },
  ]);

  it(`should aggregate clicks by teams`, () => {
    const leaderboard = getAll();
    expect(leaderboard).toHaveLength(2);
    expect(leaderboard[0]).toEqual({
      team: 'applifting',
      order: 1,
      clicks: 25,
    })
    expect(leaderboard[1]).toEqual({
      team: 'another team',
      order: 2,
      clicks: 8,
    })
  });

  it(`should sort teams by the score`, () => {
    mockedDb.getAllClickRecords.mockReturnValue([
      {
        team: 'second',
        session: 'abc123',
        clicks: 30,
      },
      {
        team: 'first',
        session: 'Martin',
        clicks: 100,
      },
    ]);

    const leaderboard = getAll();
    expect(leaderboard[0].team).toBe('first');
    expect(leaderboard[1].team).toBe('second');
  })
});
