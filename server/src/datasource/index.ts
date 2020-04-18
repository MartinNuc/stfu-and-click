import { Session } from 'stfu-and-click-shared/src/session';
import { DataSource } from './datasource.interface';
import { ClickRequest } from 'stfu-and-click-shared/src/click';
import { TeamClickRecord } from './schema';
import { User } from '../controllers/summary';
import { Team } from 'stfu-and-click-shared/src/team';

import redisClient from '../db/redis';
import { makeTuples } from '../utils/make-tuples';

class RedisDataSource implements DataSource {
  async registerClick(click: ClickRequest) {
    return new Promise<void>((resolve, reject) => {
      // add clicks in a single transaction
      redisClient
        .multi()
        .incr(`user:${click.session}`)
        .zincrby(`teams`, 1, click.team)
        .exec((err) => (err ? reject() : resolve()));
    });
  }

  async getAllTeamsScore(): Promise<TeamClickRecord[]> {
    return new Promise((resolve, reject) => {
      redisClient.zrevrange('teams', 0, -1, 'withscores', (err, result) => {
        if (err) {
          return reject(err);
        }
        const tuples = makeTuples(result);
        const map = tuples.map(([team, clicks]) => ({
          clicks: +clicks,
          team,
        }));
        resolve(map);
      });
    });
  }

  async getUserScore(user: User): Promise<number> {
    return new Promise((resolve, reject) => {
      redisClient.get(`user:${user.session}`, (err, clicks) => {
        if (err) {
          return reject(err);
        }
        resolve(+clicks);
      })
    });
  }

  async getTeamScore(team: Team): Promise<number> {
    return new Promise((resolve, reject) => {
      redisClient.zscore('teams', team, (err, score) => {
        if (err) {
          return reject(err);
        }
        resolve(+score);
      })
    });
  }
}

export default new RedisDataSource();
