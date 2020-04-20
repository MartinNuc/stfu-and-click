import React, { FC } from 'react';
import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard-entry';
import { ScoreTable } from 'components/ScoreTable';
import { FlagTitle } from 'components/FlagTitle';
import styled from 'styled-components';

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
    <Container {...props}>
      <FlagContainer>
        <FlagTitle title="TOP 10 Clickers" />
      </FlagContainer>
      <ScoreTable scores={scores}></ScoreTable>
    </Container>
  );
};

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const FlagContainer = styled.div`
  margin: 0.7rem;
`;