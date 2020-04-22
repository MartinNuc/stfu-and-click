import React from 'react';
import { ClickRaceButton } from './ClickRaceButton';
import { render, fireEvent } from 'utils/test-utils';
import axios from 'axios';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ClickRaceButton', () => {
  it('should send click the server when the button is clicked', () => {
    const { getByText } = render(<ClickRaceButton />, {
      initialState: {
        game: {
          session: 'abc123',
          myTeam: 'Bulanci',
        },
      },
    });

    fireEvent.click(getByText('CLICK!'));

    expect(mockedAxios.post).toHaveBeenCalledWith('/api/v1/click', {
      session: 'abc123',
      team: 'Bulanci',
    });
  });
});
