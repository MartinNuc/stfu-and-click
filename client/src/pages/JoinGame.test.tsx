import React from 'react';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from 'utils/test-utils';
import { JoinGame } from './JoinGame';

describe('JoinGame', () => {
  it('should redirect to game route after filling the team name', () => {
    const history = createMemoryHistory();
    const { getByPlaceholderText, getByText } = render(<JoinGame />, {
      history,
    });
    expect(history.location.pathname).toBe('/');
    fireEvent.change(getByPlaceholderText('Your mom'), {
      target: { value: 'Applifters' },
    });
    fireEvent.click(getByText('Click!'));
    expect(history.location.pathname).toBe('/Applifters');
  });
});
