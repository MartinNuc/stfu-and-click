import datasource from '../datasource';
import io from '../websockets';

import { TeamUpdateEvent } from 'stfu-and-click-shared/src/websockets';
import { ClickRequest } from 'stfu-and-click-shared/src/click';

export async function registerClick(click: ClickRequest) {
  await datasource.registerClick(click);

  // emit new team score over websocket to every client
  const newTeamScore = await datasource.getTeamScore(click.team);
  io().emit('teamUpdate', {
    team: click.team,
    clicks: newTeamScore
  } as TeamUpdateEvent);
}
