import React, { FC } from 'react';
import styled from 'styled-components';
import { LeaderboardEntry } from 'stfu-and-click-shared/src/leaderboard';
import { delimitThousands } from 'utils/thousands-delimiter';
import { Team } from 'stfu-and-click-shared/src/team';
import { motion } from 'framer-motion';

type Props = {
  scores: LeaderboardEntry[];
  emphasizedTeam?: Team | null;
};

const springAnimation = {
  type: 'spring',
  damping: 20,
  stiffness: 600,
};

export const ScoreTable: FC<Props> = ({ scores, emphasizedTeam }) => {
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
          <ScoreRow key={score.team} emphasized={score.team === emphasizedTeam}>
            <BodyCell data-testid="order" isNumber={true}>
              {score.order}
            </BodyCell>
            <BodyCell data-testid="team">{score.team}</BodyCell>
            <BodyCell data-testid="clicks" isNumber={true}>
              {delimitThousands(score.clicks)}
            </BodyCell>
          </ScoreRow>
        ))}
        {!scores.length && (
          <tr>
            <RowOverWholeTable data-testid="empty">
              There are no scores yet
            </RowOverWholeTable>
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

type ScoreRowProps = {
  emphasized?: boolean;
};

const ScoreRow: FC<ScoreRowProps> = ({ children, emphasized }) =>
  emphasized ? (
    <EmphasizedRow layoutTransition={springAnimation}>{children}</EmphasizedRow>
  ) : (
    <motion.tr layoutTransition={springAnimation}>{children}</motion.tr>
  );

const EmphasizedRow = styled(motion.tr)`
  &&& {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    font-size: 2rem;
  }
`;

const HeaderCell = styled.th<{ isNumber?: boolean }>`
  color: ${({ theme }) => theme.subtleText};
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
  colSpan: 3,
}))`
  text-align: center;
`;

const TableBodyWithAlternatingRows = styled.tbody`
  & > tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.backgroundPrimary};
  }
  & > tr:nth-child(even) {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;
