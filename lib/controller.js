const { Router } = require('express');
const Animal = require('./Models/Animal.js');

module.exports = Router()
.post ('/', async (req, res, next) => {
    try {
        const animalInfo = req.body;

        const savedAnimal = await Animal.insert(animalInfo);
        res.send(savedAnimal);

    } catch (error) {
      next(error);
    }
})

