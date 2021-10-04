const pool = require('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');


describe('crudish routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should save an animal', () => {
    const animalObject = {
    animal_id: 4,
    animal: 'raven'
   
  };
    return request(app) .post('/api/animalkingdom/')
     .send(animalObject) 
     .then((res) => {
       expect(res.body).toEqual({
    animal_id: 4, 
    animal: 'raven'
  })})
  })

  afterAll(() => {
    pool.end();
  });
});
