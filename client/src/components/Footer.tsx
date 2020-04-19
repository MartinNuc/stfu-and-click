import React from 'react'
import styled from 'styled-components';

const Quote = styled.div`
  font-style: italic;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 1;
  padding: 1rem;
  align-self: stretch;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Quote>
        If you don't like this page, it's <a href="https://www.applifting.cz" target="_blank" rel="noopener noreferrer">Applifting</a>'s fault.
      </Quote>
    </StyledFooter>
  )
}
