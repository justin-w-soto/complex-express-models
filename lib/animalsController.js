const { Router } = require('express');
const Animal = require('./Models/Animal.js');

module.exports = Router()
.post('/', async (req, res, next) => {

  try {
    const { name, speciesId } = req.body;
    const animalAdded = await Animal.insert({ name, speciesId });

    res.send(animalAdded);

  } catch (error) {
    next(error);
  }
})

.get('/:id', async (req, res, next) => {

  try {
    const id = req.params.id;
    const animal = await Animal.get(id);

    res.send(animal);

  } catch (error) {
    next(error);
  }
})

.get('/species', async (req, res, next) => {

    try {
      const getAnimalWithSpecies = await Animal.animalsAndSpecies();

      res.send(getAnimalWithSpecies);

    } catch (error) {
      next(error);
    }
  })

  .put('/:id', async (req, res, next) => {

    try {
      const id = req.params.id;
      const { name, speciesId } = req.body;
      const putAnimal = await Animal.put({ id, name, speciesId });

      res.send(putAnimal);

    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', async (req, res, next) => {

    try {
      const id = req.params.id;
      const deleteAnimal = await Animal.delete(id);

      res.send(deleteAnimal);

    } catch (error) {
      next(error);
    }
  })

  .get('/species/count', async (req, res, next) => {

    try {
      const countAnimalsBySpecies = await Animal.countBySpecies();

      res.send(countAnimalsBySpecies);

    } catch (error) {
      next(error);
    }
  })