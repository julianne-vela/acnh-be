const { Router } = require('express');
const Villager = require('../models/Villager');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const allVillagers = await Villager.selectAllVillagers();
    res.send(allVillagers);
  } catch (err) {
    next(err);
  }
});
