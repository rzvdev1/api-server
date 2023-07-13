'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.js');
const drink = require('./drink.js');
const Collection = require('./collection.js');
const driver = require('./driver.js');
const car = require('./car.js');

const POSTGRES_URI =
  process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

let sequelize = new Sequelize(POSTGRES_URI);

const driverModel = driver(sequelize, DataTypes);
const carModel = car(sequelize, DataTypes);

driverModel.hasMany(carModel, { foreignKey: 'driverId', sourceKey: 'id' });
carModel.belongsTo(driverModel, { foreignKey: 'driverId', targetKey: 'id' });

const driverCollection = new Collection(driverModel);
const carCollection = new Collection(carModel);

module.exports = {
  dbInstance: sequelize,
  Food: food(sequelize, DataTypes),
  Drink: drink(sequelize, DataTypes),
  driverCollection,
  carCollection,
};
