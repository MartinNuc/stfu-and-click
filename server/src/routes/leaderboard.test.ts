import request from 'supertest';
import app from '../server';

jest.mock('../datasource');

describe('Clicks endpoint', () => {
  it('should return leaderboard', async () => {
    await request(app).post('/api/v1/click').send({
      team: 'applifting',
      session: 'abc123',
    });
    await request(app).post('/api/v1/click').send({
      team: 'another team',
      session: 'jkl123',
    });
    await request(app).post('/api/v1/click').send({
      team: 'applifting',
      session: 'zxc123',
    });

    const res = await request(app).get('/api/v1/leaderboard').send();
    expect(res.status).toEqual(200);
    expect(res.body).toEqual([
      {
        clicks: 2,
        team: 'applifting',
        order: 1,
      },
      {
        clicks: 1,
        team: 'another team',
        order: 2,
      },
    ]);
  });
});
