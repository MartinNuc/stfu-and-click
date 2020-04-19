/**
 * API e2e tests
 *
 * @group integration
 */

import request from 'supertest';
import app from '../server';
import _ from '../datasource';
import redis from '../db/redis';
import http from 'http';

describe('REST:stfu and click button test', () => {
  let server: http.Server;

  beforeEach((done) => {
    redis.flushall(done);
  });

  beforeAll((done) => {
    server = app.listen(0, done);
  });

  it('should allow multiple players to compete', async () => {
    await request(server).post('/api/v1/click').send({
      team: 'applifting',
      session: 'abc123',
    });
    await request(server).post('/api/v1/click').send({
      team: 'another team',
      session: 'jkl123',
    });
    const clickResponse = await request(server).post('/api/v1/click').send({
      team: 'applifting',
      session: 'zxc123',
    });
    expect(clickResponse.status).toEqual(200);
    expect(clickResponse.body).toEqual({
      yourClicks: 1,
      teamClicks: 2,
    });

    const leaderboard = await request(server).get('/api/v1/leaderboard').send();
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
