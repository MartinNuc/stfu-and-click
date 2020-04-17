import request from 'supertest';
import app from '../server';

describe('Clicks endpoint', () => {
  it('should register click', async () => {
    const res = await request(app).post('/api/v1/click').send({
      team: 'applifting',
      session: 'abc123',
    });
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      yourClicks: 21,
      teamClicks: 26
    });
  });
});
