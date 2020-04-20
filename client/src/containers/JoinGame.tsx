import React from 'react';
import styled from 'styled-components';
import { Quote } from 'components/Quote';
import { BlueBorderedContainer } from 'atoms/BlueBordredContainer';
import { TopTen } from 'containers/TopTen';
import { JoinGameForm } from 'components/JoinGameForm';

export const JoinGame = () => {
  function joinGame(team: string) {
    console.log(team);
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
