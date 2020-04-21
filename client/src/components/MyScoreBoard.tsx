import React, { FC } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { RootState } from 'store';
import { delimitThousands } from 'utils/thousands-delimiter';

export const MyScoreBoard = () => {
  const { myClicks, myTeam } = useSelector((state: RootState) => state.game)
  const myTeamClicks = 653335;
  return (
    <Container>
      <BoardItem title="YourClicks:" value={myClicks} />
      <BoardItem title="Team clicks:" value={myTeamClicks} />
    </Container>
  )
}

type BoardItemProps = {
  title: string;
  value: number;
}
const BoardItem: FC<BoardItemProps> = ({title, value}) => <Tile>
  <Title>{title}</Title>
  <Value>{delimitThousands(value)}</Value>
</Tile>

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
`;

const Title = styled.div`
  font-style: italic;
`;

const Value = styled.div`
  color: ${({theme}) => theme.primary};
  font-size: 2.5rem;
  font-weight: bold;
`;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;