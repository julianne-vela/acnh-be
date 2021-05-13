const Villager = require('../models/Villager');

module.exports = class VillagerService {
  static async getAllVillagers() {
    const allVillagers = await Villager.selectAllVillagers();
    return allVillagers;
  }

  static async getVillagersBySpecies(species) {
    const villagersBySpecies = await Villager.selectVillagersBySpecies(species);
    return villagersBySpecies;
  }
};
