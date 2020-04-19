import React, { FC } from 'react';
import styled from 'styled-components';
import { Quote } from 'components/Quote';

export const Footer: FC = (props) => {
  return (
    <StyledFooter {...props}>
      <Quote>
        If you don't like this page, it's{' '}
        <a
          href="https://www.applifting.cz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Applifting
        </a>
        's fault.
      </Quote>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 1;
  padding: 1rem;
  align-self: stretch;
`;
