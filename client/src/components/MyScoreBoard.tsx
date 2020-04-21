import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store';
import { delimitThousands } from 'utils/thousands-delimiter';

export const MyScoreBoard = () => {
  const { myClicks, myTeam } = useSelector((state: RootState) => state.game)
  const myTeamClicks = 653335;
  return (
    <div>
      <BoardItem title="YourClicks" value={myClicks} />
      <BoardItem title="Team clicks" value={myTeamClicks} />
    </div>
  )
}

type BoardItemProps = {
  title: string;
  value: number;
}
const BoardItem: FC<BoardItemProps> = ({title, value}) => <div>
  {title} {delimitThousands(value)}
</div>