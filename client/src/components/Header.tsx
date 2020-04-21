import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header: FC = (props) => {
  return (
    <StyledHeader {...props}>
      <PageName to="/">STFUANDCLICK.COM</PageName>
    </StyledHeader>
  );
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

const PageName = styled(Link)`
  color: white;
  text-decoration: none;
`;