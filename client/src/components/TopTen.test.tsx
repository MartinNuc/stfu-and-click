import React from 'react';
import { render, waitForElementToBeRemoved } from 'utils/test-utils';
import { TopTen } from './TopTen';
import { fetchLeaderboardSucess } from 'store/leaderboardSlice';
import axios from 'axios';

const mockedAxios = axios as jest.Mocked<typeof axios>;

test('it shows loading spinner until data loads', () => {
  const { queryByTestId, store } = render(<TopTen />);
  expect(queryByTestId('spinner')).toBeDefined();
  store.dispatch(fetchLeaderboardSucess([]));
  expect(queryByTestId('spinner')).toBeNull();
});

test('it shows only first 10 teams', async () => {
  const dummyLeaderboard = Array.from(Array(30).keys()).map((n) => ({
    order: n,
    clicks: n * 2,
    team: `Team${n}`,
  }));

  mockedAxios.get.mockResolvedValue({data: dummyLeaderboard});

  const { queryByTestId, queryByText } = render(<TopTen />);

  await waitForElementToBeRemoved(() => queryByTestId('spinner'));
  expect(queryByText('Team1')).toBeDefined();
  expect(queryByText('Team10')).toBeDefined();
  expect(queryByText('Team11')).toBeNull();
});

test('it shows error when loading fails', async () => {
  mockedAxios.get.mockRejectedValue('Failed');

  const { queryByTestId, queryByText } = render(<TopTen />);

  await waitForElementToBeRemoved(() => queryByTestId('spinner'));
  expect(queryByText('Failed')).toBeDefined();
});
