import { User } from './../controllers/summary';
import { ClickRequest } from 'stfu-and-click-shared/src/click';
import { TeamClickRecord } from './schema';
import { Team } from 'stfu-and-click-shared/src/team';

export interface DataSource {
  registerClick(click: ClickRequest): Promise<void>;
  getAllTeamsScore(): Promise<TeamClickRecord[]>;
  getUserScore(user: User): Promise<number>;
  getTeamScore(team: Team): Promise<number>;
}
