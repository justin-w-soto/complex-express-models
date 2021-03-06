const pool = require('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');

// ->>>--------------------------------------------------------------------------->>
// ADD SPECIES & ANIMAL SEED DATA

  async function addSpecies() {
    const speciesData = [

      { type: 'canus-lupis' },
      { type: 'ursus-arctos-horribilis'},
      { type: 'oncorhynchus-kisutch' },
      { type: 'corvus-corax'}
    ];
  
    return Promise.all(
      speciesData.map(async (species) => {
        const res = await request(app).post('/api/species').send(species);
        return res.body;
      })
    );
  }
  async function addAnimals() {
    const animalsData = [

      { name: 'wolf', speciesId: '1' },
      { name: 'grizzly', speciesId: '2' },
      { name: 'coho salmon', speciesId: '3' },
      { name: 'raven', speciesId: '4' }
    ];

    return Promise.all(
      animalsData.map(async (animal) => {
        const res = await request(app).post('/api/animals').send(animal);
        return res.body;
      })
    );
  }

  // ->>>--------------------------------------------------------------------------->>
  // ADD TESTS FOR ALL ROUTES

  describe('crudish routes', () => {
    beforeEach(() => {
      return setup(pool);
    });

    it('should POST a new Species', async () => {
      const res = await request(app)
        .post('/api/species')
        .send({ type: 'chrysemys picta picta' });

        expect(res.body).toEqual({

        id: '1',
        type: 'chrysemys picta picta'

      });
    });

// ->>>--------------------------------------------------------------------------->>

it('should GET all species', async () => {
  await addSpecies();
  return request(app)
    .get('/api/species')
    .then((res) => {
      expect(res.body).toEqual([
        {
          id: '1',
          type: expect.any(String),
        },
        {
          id: '2',
          type: expect.any(String),
        },
        {
          id: '3',
          type: expect.any(String),
        },
        {
          id: '4',
          type: expect.any(String),
        },
      ]);
    });
});

// ->>>--------------------------------------------------------------------------->>

it('should POST an animal', async () => {
  await addSpecies();
  return request(app)
    .post('/api/animals/')
    .send({ name: 'wolf', speciesId: '1' })
    .then((res) => {

      expect(res.body).toEqual({

        id: expect.any(String),
        name: 'wolf',
        speciesId: '1',
        
      });


    });
});

// ->>>--------------------------------------------------------------------------->>

it('should GET an animal by id', async () => {
  await addSpecies();
  await addAnimals();
  return request(app)
    .get('/api/animals/1')
    .then((res) => {
      expect(res.body).toEqual({

        id: '1',
        name: expect.any(String),
        speciesId: expect.any(String)

      });
    });
});

// ->>>--------------------------------------------------------------------------->>

xit('should GET all animals and their species', async () => {
  await addSpecies();
  await addAnimals();
  return request(app)
    .get('/api/animals/species')
    .then((res) => {
      expect(res.body).toEqual([

        {
          name: expect.any(String),
          species: expect.any(String)
        },
        {
          name: expect.any(String),
          species: expect.any(String)
        },
        {
          name: expect.any(String),
          species: expect.any(String)
        },
        {
          name: expect.any(String),
          species: expect.any(String)
        }

      ]);
    });
});


// ->>>--------------------------------------------------------------------------->>

it('updates an animal with a PUT route', async () => {
  await addSpecies();
  await addAnimals();
  return request(app)
    .put('/api/animals/1')
    .send({

      name: 'flying pig',
      speciesId: '1'

    })
    .then((res) => {
      expect(res.body).toEqual({

        id: '1',
        name: 'flying pig',
        speciesId: '1'

      });
    });
});

// ->>>--------------------------------------------------------------------------->>

it('DELETES an animal', async () => {
  await addSpecies();
  await addAnimals();
  return request(app)
    .delete('/api/animals/1')
    .then((res) => {
      expect(res.body).toEqual({

        id: '1',
        name: expect.any(String),
        speciesId: expect.any(String)

      });
    });
});

// ->>>--------------------------------------------------------------------------->>

it('should GET a count of animals by species', async () => {
  await addSpecies();
  await addAnimals();
  return request(app)
    .get('/api/animals/species/count')
    .then((res) => {
      expect(res.body).toEqual([

        {
          count: expect.any(String),
          type: expect.any(String)
        },
        {
          count: expect.any(String),
          type: expect.any(String)
        },
        {
          count: expect.any(String),
          type: expect.any(String)
        },
        {
          count: expect.any(String),
          type: expect.any(String)
        }

      ]);
    });
});

  afterAll(() => {
    pool.end();
  });
});
