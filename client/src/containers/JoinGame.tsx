import React from 'react';
import styled from 'styled-components';
import { Quote } from 'components/Quote';
import { BlueBorderedContainer } from 'components/BlueBordredContainer';
import { TopTen } from 'containers/TopTen';

export const JoinGame = () => {
  return (
    <Container>
      <QuoteContainer>
        <Quote author="anonymous">
          "It's really simple, you just need to click as fast as you can."
        </Quote>
      </QuoteContainer>
      <BlueBorderedContainer>
        <div>form</div>
        <TopTen />

        <QuoteContainer>
          <Quote>Want to be top? STFU and click!</Quote>
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
