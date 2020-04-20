import React, { FC } from 'react';
import styled from 'styled-components';

export const Header: FC = (props) => {
  return <StyledHeader {...props}>STFUANDCLICK.COM</StyledHeader>;
};

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.primary};
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-self: stretch;
`;
