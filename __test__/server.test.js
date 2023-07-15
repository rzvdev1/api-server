'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const mockRequest = supertest(server);

describe('server routes and functionality', () => {
  test('the / route will send a response of Hello World', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
  describe('api routes', () => {
    test('the food route will respond with a 404 on a bad method', async () => {
      const response = await mockRequest.patch('/api/v1/food');
      expect(response.status).toBe(404);
    });
  });
  describe('api models', () => {
    test('the food model should have a name and calories property', () => {
      const food = {
        name: 'test food',
        calories: 100,
      };
      expect(food.name).toBeDefined();
      expect(food.calories).toBeDefined();
    });
  });
});
