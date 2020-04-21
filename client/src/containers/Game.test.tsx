import React from 'react';
import { createMemoryHistory } from 'history';
import { render, getNodeText } from 'utils/test-utils';
import { Game } from './Game';
import { Route } from 'react-router-dom';

test('it should initialize the game', async () => {
  const history = createMemoryHistory();
  history.push('/Bulanci');
  const { getByTestId } = render(
    <Route path="/:team">
      <Game />
    </Route>,
    { history },
  );
  const myTeamName = getByTestId('my-team');
  expect(getNodeText(myTeamName)).toBe('Bulanci');
});
