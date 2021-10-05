const pool = require('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');


describe('crudish routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should save an animal', async () => {
    const animalObj = {
    id: 1,  
    animal_id: 4,
    animal: 'raven'
   
  };
  await request(app).post('/api/animals').send(animalObj);

  //   return request(app) 
  //   .post('/api/animals')
  //   .send(animalObj) 
  //   .then((res) => {
  //      expect(res.body).toEqual({
  //   id: 1,
  //   animal_id: 4, 
  //   animal: 'raven'
  // })})
  })

  afterAll(() => {
    pool.end();
  });
});
