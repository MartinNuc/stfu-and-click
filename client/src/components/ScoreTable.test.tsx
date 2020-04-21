import React from 'react';
import { render, getNodeText } from 'utils/test-utils';

import { ScoreTable } from './ScoreTable';
import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard';

const scores: LeaderboardEntry[] = [
  {
    order: 1,
    clicks: 50043243,
    team: 'bulanci',
  },
  {
    order: 2,
    clicks: 30483,
    team: 'team 2',
  },
  {
    order: 3,
    clicks: 5434,
    team: 'team 3',
  },
];

test('it should display scores as table', () => {
  const { queryAllByTestId } = render(<ScoreTable scores={scores} />);
  expect(queryAllByTestId('order').map((el) => getNodeText(el))).toEqual([
    '1',
    '2',
    '3',
  ]);
  expect(queryAllByTestId('team').map((el) => getNodeText(el))).toEqual([
    'bulanci',
    'team 2',
    'team 3',
  ]);
  expect(queryAllByTestId('clicks').map((el) => getNodeText(el))).toEqual([
    '50 043 243',
    '30 483',
    '5 434',
  ]);
});

test('it should display empty table', () => {
  const { queryAllByTestId, getByTestId } = render(<ScoreTable scores={[]} />);
  expect(queryAllByTestId('order').length).toBe(0);
  expect(getByTestId('empty')).toBeInTheDocument();
});

test('it should display emphasized team with blue background', () => {
  const { getByText } = render(
    <ScoreTable scores={scores} emphasizedTeam={'team 2'} />,
  );
  const emphasizedRow = getByText('team 2').parentElement;
  const notEmphasizedRow = getByText('team 3').parentElement;

  expect(emphasizedRow).toHaveStyle(`background-color: rgb(236, 243, 253)`);
  expect(notEmphasizedRow).toHaveStyle(`background-color: rgb(220, 233, 248)`);
});
