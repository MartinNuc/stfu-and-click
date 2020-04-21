/**
 * @group unit
 */

import { mocked } from 'ts-jest/utils';
import io from '../websockets';
import datasource from '../datasource';
import { ClickRequest } from 'stfu-and-click-shared/src/click';
import { registerClick } from './click';

jest.mock('../datasource');
jest.mock('../websockets', () =>
  jest.fn().mockReturnValue({
    emit: jest.fn(),
  }),
);

const mockedDb = mocked(datasource, true);
const mockedIo = mocked(io);

describe('ClickController', () => {
  it('should pass the click to the data source and emit over websocket', async () => {
    jest.spyOn(mockedDb, 'registerClick');
    const click: ClickRequest = {
      session: 'abc123',
      team: 'A-Team',
    };

    await registerClick(click);
    expect(mockedDb.registerClick).toHaveBeenCalledTimes(1);
    expect(mockedIo().emit).toHaveBeenCalledTimes(1);
  });
});
