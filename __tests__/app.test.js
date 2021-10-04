const pool = require('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');


describe('crudish routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should save an animal', () => {
    const animalObject = {x};
    return request(app) .post('/') .send(animalObject) .then((res) => {expect(res.body).toEqual({x})})
  })

  afterAll(() => {
    pool.end();
  });
});
