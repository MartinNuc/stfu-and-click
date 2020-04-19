import React from 'react'
import styled from 'styled-components';

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

export default function Header() {
  return (
    <Navbar>
      STFUANDCLICK.COM
    </Navbar>
  )
}
