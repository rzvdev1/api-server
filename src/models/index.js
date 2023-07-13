'use strict';

//bring in the sequalize objects sequalize and datatypes properties
const { Sequelize, DataTypes } = require('sequelize');

//bring in the food and drink models
const food = require('./food.js');
const drink = require('./drink.js');

//URL for sequalize to connect
const POSTGRES_URI =
  process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

//define how sequalize will connect to a DB
let sequelize = new Sequelize(POSTGRES_URI);

//export the connection that was made and turn the 'schemas' into 'models'
module.exports = {
  dbInstance: sequelize,
  Food: food(sequelize, DataTypes),
  Drink: drink(sequelize, DataTypes),
};
