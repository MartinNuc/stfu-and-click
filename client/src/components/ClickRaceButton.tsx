import React from 'react';
import { motion } from 'framer-motion';
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
    <StyledButton onClick={handleClick} whileTap={{ scale: 0.9 }}>
      CLICK!
    </StyledButton>
  );
};

const StyledButton = motion.custom(styled(Button)`
  padding: 2rem 2rem;
  font-size: 2rem;
  touch-action: manipulation;
`);
