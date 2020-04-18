import { DataSource } from './datasource.interface';
import { ClickRequest } from 'stfu-and-click-shared/src/click';
import { TeamClickRecord } from './schema';
import { User } from '../controllers/summary';
import { Team } from 'stfu-and-click-shared/src/team';

class RedisDataSource implements DataSource {
  async registerClick(click: ClickRequest) {
    throw new Error('Method not implemented.');
  }

  async getAllTeamsScore(): Promise<TeamClickRecord[]> {
    throw new Error('Method not implemented.');
  }

  async getUserScore(user: User): Promise<number> {
    throw new Error('Method not implemented.');
  }

  async getTeamScore(team: Team): Promise<number> {
    throw new Error('Method not implemented.');
  }
}

export default new RedisDataSource();
