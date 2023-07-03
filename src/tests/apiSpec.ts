import supertest from 'supertest';
import { app } from '../index';
import { resizeImageFunc } from '../routes/api/resizeImage';

const request = supertest(app);
describe('Test get /api/image/resizeImage', () => {
  it('get endpoint to be successful', async () => {
    const response = await request.get('/api/image/resizeImage?filename=camel&width=100&height=200');
    expect(response.status).toBe(200);
  });
});

describe('Test resize function', () => {
  it('resizeImageFunc function', async () => {
    const response = await resizeImageFunc(
      '../../camel.png',
      '../../change/camel-200x200-resized.png',
      100,
      100
    );
    expect(response).toBe(undefined);
  });
});
