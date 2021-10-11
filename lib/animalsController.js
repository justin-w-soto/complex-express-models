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

