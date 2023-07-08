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
});
