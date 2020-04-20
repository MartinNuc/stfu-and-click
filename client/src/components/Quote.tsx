import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  author?: string;
};

export const Quote: FC<Props> = ({ children, author }) => {
  return (
    <StyledQuote>
      <BlockQuote data-testid="text">{children}</BlockQuote>
      {author && <Author data-testid="author">- {author}</Author>}
    </StyledQuote>
  );
};

const BlockQuote = styled.blockquote`
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

const StyledQuote = styled.figure`
  font-style: italic;
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Author = styled.footer`
  text-align: right;
  margin-top: 0.5rem;
  margin-right: 2rem;
`;
