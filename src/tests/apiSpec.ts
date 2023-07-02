import supertest from 'supertest';
import app from '../routes/index';
import { resizeImageFunc } from '../routes/api/resizeImage';

const request = supertest(app);

describe('Test get image', () => {
  it('get endpoint', async () => {
    const response = await request.get('/getImage');
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
    expect(response).toBe();
  });
});
