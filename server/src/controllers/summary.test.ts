import { mocked } from 'ts-jest/utils';
jest.mock('../db');

import * as db from '../db';
import { getUsersSummary } from './summary';

const mockedDb = mocked(db, true);

describe('SummaryController', () => {
  mockedDb.getAllClickRecords.mockReturnValue([
    {
      team: 'applifting',
      session: 'abc123',
      clicks: 20,
    },
    {
      team: 'jiny',
      session: 'Martin',
      clicks: 8,
    },
    {
      team: 'applifting',
      session: 'fhsleih34u2ufw',
      clicks: 5,
    },
  ]);

  it(`should throw error when user's session is not found`, () => {
    expect(() => getUsersSummary('non-existing-session')).toThrowError();
  });

  it(`should sum team clicks`, () => {
    const summary = getUsersSummary('fhsleih34u2ufw');
    expect(summary.teamClicks).toBe(25);
  });

  it(`should calculate user's clicks`, () => {
    const summary = getUsersSummary('fhsleih34u2ufw');
    expect(summary.yourClicks).toBe(5);
  });
});
