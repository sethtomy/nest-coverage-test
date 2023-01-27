import * as request from 'supertest';

const httpClient = request('localhost:3000');


test('Query Server', async () => {
  const res = await httpClient.get('/');
  expect(res.status).toBe(200);
  expect(res.text).toBe('Hello World!');
});
