'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.js');
const drink = require('./drink.js');

const POSTGRES_URI =
  process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

let sequelize = new Sequelize(POSTGRES_URI);

module.exports = {
  dbInstance: sequelize,
  Food: food(sequelize, DataTypes),
  Drink: drink(sequelize, DataTypes),
};
