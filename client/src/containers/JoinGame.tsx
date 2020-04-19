import React from 'react';
import styled from 'styled-components';
import { Quote } from 'components/Quote';
import { BlueBorderedContainer } from 'components/BlueBordredContainer';

export const JoinGame = () => {
  return (
    <Container>
      <Quote author="anonymous">
        "It's really simple, you just need to click as fast as you can."
      </Quote>
      <BlueBorderedContainer>
        <div>form</div>
        <div>Top 10</div>

        <Quote>Want to be top? STFU and click!</Quote>
      </BlueBorderedContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
