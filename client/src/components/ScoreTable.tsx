import React, { FC } from 'react';
import styled from 'styled-components';
import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard-entry';
import { delimitThousands } from 'utils/thousands-delimiter';

type Props = {
  scores: LeaderboardEntry[];
};

export const ScoreTable: FC<Props> = ({ scores }) => {
  return (
    <Table>
      <thead>
        <tr>
          <HeaderCell isNumber={true}></HeaderCell>
          <HeaderCell>Team</HeaderCell>
          <HeaderCell isNumber={true}>Clicks</HeaderCell>
        </tr>
      </thead>
      <TableBodyWithAlternatingRows>
        {scores.map((score) => (
          <tr key={score.order}>
            <BodyCell data-testid="order" isNumber={true}>
              {score.order}
            </BodyCell>
            <BodyCell data-testid="team">{score.team}</BodyCell>
            <BodyCell data-testid="clicks" isNumber={true}>
              {delimitThousands(score.clicks)}
            </BodyCell>
          </tr>
        ))}
        {!scores.length && (
          <tr>
            <RowOverWholeTable data-testid="empty">There are no scores yet</RowOverWholeTable>
          </tr>
        )}
      </TableBodyWithAlternatingRows>
    </Table>
  );
};

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  & tr > *:first-child {
    padding-left: 1rem;
  }
  & tr > *:last-child {
    padding-right: 1rem;
  }
`;

const HeaderCell = styled.th<{ isNumber?: boolean }>`
  color: ${(props) => props.theme.subtleText};
  text-transform: uppercase;
  font-size: 0.7rem;
  padding-left: 2rem;
  text-align: ${(props) => (props.isNumber ? 'right' : 'left')};
`;

const BodyCell = styled.td<{ isNumber?: boolean }>`
  font-weight: bold;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  text-align: ${(props) => (props.isNumber ? 'right' : 'left')};
`;

const RowOverWholeTable = styled(BodyCell).attrs(() => ({
  colspan: 3,
}))``;

const TableBodyWithAlternatingRows = styled.tbody`
  & > tr:nth-child(odd) {
    background-color: ${(props) => props.theme.backgroundPrimary};
  }
  & > tr:nth-child(even) {
    background-color: ${(props) => props.theme.backgroundSecondary};
  }
`;
