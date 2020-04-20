import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
};

export const FlagTitle: FC<Props> = ({ title }) => {
  return (
    <FlagContainer>
      <LeftFlag />
      <TitleFlag>{title}</TitleFlag>
      <RightFlag />
    </FlagContainer>
  );
};

const FlagContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 10px;
  margin-left: -10px;
  margin-right: -10px;
`;

const LeftFlag = styled.div`
  position: relative;
  left: 10px;
  width: 50px;
  background-color: ${({ theme }) => theme.secondary};
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 30% 50%);
`;

const RightFlag = styled.div`
  position: relative;
  right: 10px;
  width: 50px;
  background-color: ${({ theme }) => theme.secondary};
  clip-path: polygon(100% 0%, 100% 0%, 70% 50%, 100% 100%, 0% 100%, 0% 0%);
`;

const TitleFlag = styled.div`
  z-index: 1;
  position: relative;
  top: -10px;
  background-color: ${({ theme }) => theme.primary};
  padding: 0.5rem 1rem;
  color: white;
  font-weight: bold;
`;
