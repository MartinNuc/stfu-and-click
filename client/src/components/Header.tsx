import React, { FC } from 'react'
import styled from 'styled-components';

export const Header: FC = (props) => {
  return (
    <Navbar {...props}>
      STFUANDCLICK.COM
    </Navbar>
  )
}

const Navbar = styled.div`
  background-color: #498fe2;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-self: stretch;
`;