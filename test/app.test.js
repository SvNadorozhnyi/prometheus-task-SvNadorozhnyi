const supertest = require('supertest');
const redis = require('redis-mock');

jest.mock('redis', () => {
  const redis = jest.requireActual('redis-mock');
  return {
    ...redis,
    createClient: () => {
      return {
        connect: () => jest.fn(),
        on: () => jest.fn()
      }
    }
  }
});
const app = require('../src/app.js');
const server = app.listen();
const request = supertest.agent(server);

afterAll(() => {
  jest.resetAllMocks();
  server.close();
});

describe('GET /', () => {
  it('should respond with a rendered view', (done) => {
    console.log(request
      .get('/')
      .expect(200)
      .expect(/<p>{name: Tobi, age: 3, species: ferret}<\/p>/, done));
  })
});
