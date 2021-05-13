const pool = require('../utils/pool');

module.exports = class Villager {
  id;
  name;
  personality;
  birthday;
  species;
  gender;
  hobby;
  catchPhrase;
  iconUri;
  imageUri;
  bubbleColor;
  textColor;
  sayings;

  constructor(row) {
    const {
      id,
      name,
      personality,
      birthday,
      species,
      gender,
      hobby,
      catch_phrase,
      icon_uri,
      image_uri,
      bubble_color,
      text_color,
      sayings,
    } = row;

    this.id = id;
    this.name = name;
    this.personality = personality;
    this.birthday = birthday;
    this.species = species;
    this.gender = gender;
    this.hobby = hobby;
    this.catchPhrase = catch_phrase;
    this.iconUri = icon_uri;
    this.imageUri = image_uri;
    this.bubbleColor = bubble_color;
    this.textColor = text_color;
    this.sayings = sayings;
  }

  static async selectAllVillagers() {
    const { rows } = await pool.query(`SELECT * FROM villagers`);
    return rows.map((row) => new Villager(row));
  }

  static async selectVillagersBySpecies(species) {
    const { rows } = await pool.query(
      `SELECT * FROM villagers WHERE species=$1`,
      [species]
    );
    return rows.map((row) => new Villager(row));
  }
};
