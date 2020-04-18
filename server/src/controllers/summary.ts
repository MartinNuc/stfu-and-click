import { Team } from 'stfu-and-click-shared/src/team';
import { Session } from 'stfu-and-click-shared/src/session';
import { ClickRequest } from 'stfu-and-click-shared/src/click';
import datasource from '../datasource';

export type User = {
  session: Session;
  team: Team;
};

export type UserSummary = {
  yourClicks: number;
  teamClicks: number;
};

export async function getUserSummary(userInfo: User): Promise<UserSummary> {
  const [yourClicks, teamClicks] = await Promise.all([
    datasource.getUserScore(userInfo),
    datasource.getTeamScore(userInfo.team),
  ]);

  return {
    yourClicks,
    teamClicks,
  };
}
