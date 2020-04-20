import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({theme}) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  margin: 0.5rem;
  color: white;
  text-transform: uppercase;
`;