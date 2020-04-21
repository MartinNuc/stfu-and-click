import React from 'react'
import { Button } from 'atoms/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { click } from 'store/gameSlice';

export const ClickRaceButton = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(click());
  }

  return (
      <StyledButton onClick={handleClick}>CLICK!</StyledButton>
  )
}

const StyledButton = styled(Button)`
  padding: 2rem 2rem;
  font-size: 2rem;
`;