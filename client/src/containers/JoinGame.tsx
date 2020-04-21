import React, { useState } from 'react';
import styled from 'styled-components';
import { Quote } from 'components/Quote';
import { BlueBorderedContainer } from 'atoms/BlueBordredContainer';
import { TopTen } from 'containers/TopTen';
import { JoinGameForm } from 'components/JoinGameForm';
import { Redirect } from 'react-router-dom';
import { Team } from 'stfu-and-click-shared/src/team';

export const JoinGame = () => {
  const [team, setTeam] = useState<Team | null>(null);
  
  function joinGame(team: string) {
    setTeam(team);
  }

  if (team) {
    return <Redirect to={team} />;
  }

  return (
    <Container>
      <QuoteContainer>
        <Quote author="anonymous">
          "It's really simple, you just need to click as fast as you can."
        </Quote>
      </QuoteContainer>
      <BlueBorderedContainer>
        <JoinGameForm onJoin={joinGame}></JoinGameForm>

        <TopTen />

        <QuoteContainer>
          <Quote>Want to be the top? STFU and click!</Quote>
        </QuoteContainer>
      </BlueBorderedContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuoteContainer = styled.div`
  margin: 1rem 0;
  align-self: center;
`;
