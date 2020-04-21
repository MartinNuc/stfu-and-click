import React from 'react';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from 'utils/test-utils';
import { JoinGame } from './JoinGame';

test('it should redirect to game route after filling the team name', () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(<JoinGame />, { history });
  expect(history.location.pathname).toBe('/');
  fireEvent.change(getByTestId('team'), { target: { value: 'Applifters' } });
  fireEvent.click(getByTestId('submit'));
  expect(history.location.pathname).toBe('/Applifters');
});
