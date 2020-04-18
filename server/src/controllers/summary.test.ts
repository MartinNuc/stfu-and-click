import { ClickRequest } from 'stfu-and-click-shared/src/click';
import { mocked } from 'ts-jest/utils';
jest.mock('../datasource');

import datasource from '../datasource';
import { getUserSummary } from './summary';

const mockedDb = mocked(datasource, true);

describe('SummaryController', () => {
  it(`should fetch user and team score from DB for executed click`, async () => {
    jest.spyOn(mockedDb, 'getUserScore').mockResolvedValue(10);
    jest.spyOn(mockedDb, 'getTeamScore').mockResolvedValue(20);

    const click: ClickRequest = {
      session: 'abc123',
      team: 'team',
    };
    const response = await getUserSummary(click);

    expect(response.yourClicks).toBe(10);
    expect(response.teamClicks).toBe(20);
  });
});
