/**
 * @group unit
 */

import { mocked } from 'ts-jest/utils';
jest.mock('../datasource');

import datasource from '../datasource';
import { ClickRequest } from 'stfu-and-click-shared/src/click';
import { registerClick } from './click';

const mockedDb = mocked(datasource, true);

describe('ClickController', () => {
  it('should pass the click to the data source', async () => {
    jest.spyOn(mockedDb, 'registerClick');
    const click: ClickRequest = {
      session: 'abc123',
      team: 'A-Team',
    };

    await registerClick(click);
    expect(mockedDb.registerClick).toHaveBeenCalledTimes(1);
  });
});
