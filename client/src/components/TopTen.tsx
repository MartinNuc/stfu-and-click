import React, { FC, useEffect } from 'react';
import { Error } from 'atoms/Error';
import { ScoreTable } from 'components/ScoreTable';
import { FlagTitle } from 'components/FlagTitle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { fetchLeaderboard } from 'store/leaderboardSlice';
import { Spinner } from 'atoms/Spinner';
import { createSelector } from 'reselect';

const topTenSelector = createSelector(
  (state: RootState) => state.leaderboard.leaderboard,
  (leaderboard) => leaderboard.filter((_, index) => index < 10),
);

export const TopTen: FC = (props) => {
  const dispatch = useDispatch();
  const leaderboard = useSelector(topTenSelector);
  const { error, isLoading } = useSelector(
    (state: RootState) => state.leaderboard,
  );

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchLeaderboard());
    }
    fetchData();
  }, [dispatch]);

  return (
    <Container {...props}>
      <FlagContainer>
        <FlagTitle title="TOP 10 Clickers" />
      </FlagContainer>
      {isLoading ? (
        <Spinner data-testid="spinner" />
      ) : (
        <ScoreTable scores={leaderboard}></ScoreTable>
      )}
      {error && <Error>{error}</Error>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const FlagContainer = styled.div`
  margin: 0.7rem;
`;
