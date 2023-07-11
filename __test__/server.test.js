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
    test('the food route will respond with a status of 204', async () => {
      const response = await mockRequest.delete('/food/1');
      expect(response.status).toBe(204);
      expect(response.body).toEqual({});
      const getResponse = await mockRequest.get('/food');
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
