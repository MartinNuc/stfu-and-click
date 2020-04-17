import request from 'supertest';
import app from '../server';

describe('Clicks endpoint', () => {
  it('should return leaderboard', async () => {
    const res = await request(app).get('/api/v1/leaderboard').send();
    expect(res.status).toEqual(200);
    expect(res.body).toEqual([
      {
        clicks: 25,
        team: 'applifting',
        order: 1,
      },
      {
        clicks: 8,
        team: 'jiny',
        order: 2,
      },
    ]);
  });
});
