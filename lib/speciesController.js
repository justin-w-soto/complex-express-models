const { Router } = require('express');
const Species = require('./Models/Species.js');

module.exports = Router()
.post('/', async (req, res, next) => {
    try {
      const { type } = req.body;
      const addedSpecies = await Species.insert({ type });

      res.send(addedSpecies);

    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const getAllSpecies = await Species.getThemAll();

      res.send(getAllSpecies);

    } catch (error) {
      next(error);
    }
  });