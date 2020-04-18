import request from 'supertest';
import app from '../server';

jest.mock('../datasource');

describe('Clicks endpoint', () => {
  it('should register click', async () => {
    await request(app).post('/api/v1/click').send({
      team: 'applifting',
      session: 'abc123',
    });
    await request(app).post('/api/v1/click').send({
      team: 'another team',
      session: 'jkl123',
    });
    const res = await request(app).post('/api/v1/click').send({
      team: 'applifting',
      session: 'zxc123',
    });
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      yourClicks: 1,
      teamClicks: 2,
    });
  });
});
