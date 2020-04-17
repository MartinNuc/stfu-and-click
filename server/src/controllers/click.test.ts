import { mocked } from 'ts-jest/utils';
jest.mock('../db');

import * as db from '../db';
import { ClickRequest } from 'stfu-and-click-shared/src/click';
import { registerClick } from './click';

const mockedDb = mocked(db, true);

describe('ClickController', () => {
  const click: ClickRequest = {
    session: 'abc123',
    team: 'A-Team',
  };

  it('should register brand new click', () => {
    mockedDb.getAllClickRecords.mockReturnValue([]);
    registerClick(click);
    expect(mockedDb.registerNewClick.mock.calls).toHaveLength(1);
  });

  it('should increment click count for existing click', () => {
    mockedDb.getAllClickRecords.mockReturnValue([
      {
        clicks: 5,
        session: 'abc123',
        team: 'A-Team',
      },
    ]);
    registerClick(click);
    expect(mockedDb.incrementExistingClick.mock.calls).toHaveLength(1);
  });
});
