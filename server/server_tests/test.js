const request = require('supertest');

describe('GET house_id from the database', () => {
  test('It should respond with the correct house_id', async () => {
    const response = await request('http://127.0.0.1:3001').get('/review/124');
    const response2 = await request('http://127.0.0.1:3001').get('/review/101');
    const response3 = await request('http://127.0.0.1:3001').get('/review/200');
    expect(response.body[0].house_id).toEqual(124);
    expect(response2.body[0].house_id).toEqual(101);
    expect(response3.body[0].house_id).toEqual(200);
    expect(response.statusCode).toBe(202);
  });
  test('It should have an array of reviews', async () => {
    const response = await request('http://127.0.0.1:3001').get('/review/124');
    expect(response.body[0].reviews.length).toBeGreaterThan(10);
    expect(response.statusCode).toBe(202);
  });
  test('It should return on object with the all the following properties', async () => {
    const response = await request('http://127.0.0.1:3001').get('/review/124');
    expect(response.body[0]).toHaveProperty('house_id');
    expect(response.body[0]).toHaveProperty('accuracy');
    expect(response.body[0]).toHaveProperty('communication');
    expect(response.body[0]).toHaveProperty('cleanliness');
    expect(response.body[0]).toHaveProperty('location');
    expect(response.body[0]).toHaveProperty('check_in');
    expect(response.body[0]).toHaveProperty('value');
    expect(response.body[0]).toHaveProperty('reviews');
    expect(response.body[0].reviews[0]).toHaveProperty('review_id');
    expect(response.body[0].reviews[0]).toHaveProperty('name');
    expect(response.body[0].reviews[0]).toHaveProperty('avatar');
    expect(response.body[0].reviews[0]).toHaveProperty('review');
    expect(response.body[0].reviews[0]).toHaveProperty('date_created');
    expect(response.statusCode).toBe(202);
  });
});
