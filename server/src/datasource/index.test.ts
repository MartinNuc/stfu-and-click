import redis from '../db/redis';
import redisDatastore from './index';
import { promisify } from 'util';

const get = promisify(redis.get).bind(redis);
const set = promisify(redis.set).bind(redis);
const zscore = promisify(redis.zscore).bind(redis);
const zincrby = promisify(redis.zincrby).bind(redis);

describe('Integration:Redis datastore test', () => {
  beforeEach((done) => {
    redis.flushall(done);
  });

  it('should increment score for a single user', async () => {
    redisDatastore.registerClick({
      session: 'abc123',
      team: 'Applifters',
    });
    let userClicks = await get('user:abc123');
    expect(userClicks).toBe('1');

    redisDatastore.registerClick({
      session: 'abc123',
      team: 'Applifters',
    });
    userClicks = await get('user:abc123');
    expect(userClicks).toBe('2');
  });

  it('should increment score for a team', async () => {
    redisDatastore.registerClick({
      session: 'abc123',
      team: 'Applifters',
    });
    let teamScore = await zscore('teams', 'Applifters');
    expect(teamScore).toBe('1');

    redisDatastore.registerClick({
      session: 'abc123',
      team: 'Applifters',
    });
    teamScore = await zscore('teams', 'Applifters');
    expect(teamScore).toBe('2');
  });

  it(`should read user's score`, async () => {
    await set('user:aaa123', '4');
    const score = await redisDatastore.getUserScore({
      session: 'aaa123',
      team: '',
    });
    expect(score).toBe(4);
  });

  it(`should read score of a team`, async () => {
    await zincrby(`teams`, 5, 'random team');
    const score = await redisDatastore.getTeamScore('random team');
    expect(score).toBe(5);
  });

  it(`should get all teams with their score`, async () => {
    await zincrby(`teams`, 4, 'team 1');
    await zincrby(`teams`, 10, 'team 2');
    await zincrby(`teams`, 99, 'team 3');
    await zincrby(`teams`, 2, 'team 4');
    const scores = await redisDatastore.getAllTeamsScore();
    expect(scores).toEqual([
      {
        team: 'team 3',
        clicks: 99,
      },
      {
        team: 'team 2',
        clicks: 10,
      },
      {
        team: 'team 1',
        clicks: 4,
      },
      {
        team: 'team 4',
        clicks: 2,
      },
    ]);
  });
});
