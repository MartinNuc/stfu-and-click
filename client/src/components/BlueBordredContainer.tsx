// import React from 'react';
import styled from 'styled-components';

export const BlueBorderedContainer = styled.div`
  border-color: ${props => props.theme.primary};
  border-style: solid;
  border-radius: 0.5rem;
  border-width: 0.25rem;
  background-color: white;
  display: flex;
  flex-direction: column;
`;