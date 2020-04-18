import request from 'supertest';
import app from '../src/server';
import _ from '../src/datasource';
import redis from '../src/db/redis';

describe('REST:stfu and click button test', () => {
  beforeEach((done) => {
    redis.flushall(done);
  });

  it('should allow multiple players to compete', async () => {
    await request(app).post('/api/v1/click').send({
      team: 'applifting',
      session: 'abc123',
    });
    await request(app).post('/api/v1/click').send({
      team: 'another team',
      session: 'jkl123',
    });
    const clickResponse = await request(app).post('/api/v1/click').send({
      team: 'applifting',
      session: 'zxc123',
    });
    expect(clickResponse.status).toEqual(200);
    expect(clickResponse.body).toEqual({
      yourClicks: 1,
      teamClicks: 2,
    });
    const leaderboard = await request(app).get('/api/v1/leaderboard').send();
    expect(leaderboard.body).toEqual([
      {
        team: 'applifting',
        clicks: 2,
        order: 1,
      },
      {
        team: 'another team',
        clicks: 1,
        order: 2,
      },
    ]);
  });
});
