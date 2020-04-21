import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Quote } from 'components/Quote';
import { ScoreTable } from 'components/ScoreTable';
import { useSelector, useDispatch } from 'react-redux';
import { BlueBorderedContainer } from 'atoms/BlueBordredContainer';
import { InvitePals } from 'components/InvitePals';
import { ClickRaceButton } from 'components/ClickRaceButton';
import { MyScoreBoard } from 'components/MyScoreBoard';
import { joinTeam } from 'store/gameSlice';
import { useParams } from 'react-router-dom';
import { fetchLeaderboard } from 'store/leaderboardSlice';
import { selectTeamsAround } from 'store/selectors';

const teamsAroundMeSelector = selectTeamsAround(7);

export const Game = () => {
  const dispatch = useDispatch();
  const scores = useSelector(teamsAroundMeSelector);
  const { team: myTeam } = useParams<{ team: string }>();

  useEffect(() => {
    dispatch(fetchLeaderboard());
    dispatch(joinTeam(myTeam));
  }, [myTeam, dispatch]);

  return (
    <Container>
      <Heading>
        Clicking for team <TeamName data-testid="my-team">{myTeam}</TeamName>
      </Heading>
      <InviteContainer>
        <InvitePals />
      </InviteContainer>

      <BlueBorderedContainer>
        <ClickRaceButton />
        <MyScoreBoard />
        <ScoreTable scores={scores} emphasizedTeam={myTeam} />
        <InviteContainer>
          <Quote>Want to be the top? STFU and click!</Quote>
        </InviteContainer>
      </BlueBorderedContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 2rem;
  font-size: 2rem;
  font-weight: normal;
`;

const TeamName = styled.span`
  font-weight: bold;
`;

const InviteContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  align-self: center;
  font-style: italic;
`;
