import React, { FC } from 'react';
import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard-entry';
import { ScoreTable } from 'components/ScoreTable';

export const TopTen: FC = (props) => {
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
  return (
    <div {...props}>
      logo
      <ScoreTable scores={scores}></ScoreTable>
    </div>
  );
};
