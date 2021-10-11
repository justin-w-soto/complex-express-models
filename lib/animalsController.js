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
