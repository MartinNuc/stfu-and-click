import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  author?: string;
};

export const Quote: FC<Props> = ({ children, author }) => {
  return (
    <StyledQuote>
      <div data-testid="text">{children}</div>
      {author && <Author data-testid="author">- {author}</Author>}
    </StyledQuote>
  );
};

const StyledQuote = styled.div`
  font-style: italic;
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Author = styled.span`
  text-align: right;
  margin-top: 0.5rem;
  margin-right: 2rem;
`;
