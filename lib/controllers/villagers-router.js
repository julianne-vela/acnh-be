const { Router } = require('express');
const VillagerService = require('../services/VillagerService');
const capFirstLetter = require('../utils/generalUtils');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const allVillagers = await VillagerService.getAllVillagers();

      res.send(allVillagers);
    } catch (err) {
      next(err);
    }
  })
  .get('/:species', async (req, res, next) => {
    try {
      const query = capFirstLetter(req.query.params);
      const villagersBySpecies = await VillagerService.getVillagersBySpecies(
        query
      );
      res.send(villagersBySpecies);
    } catch (err) {
      next(err);
    }
  });
