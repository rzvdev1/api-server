'use strict';

//bring in the sequalize objects sequalize and datatypes properties
const { Sequelize, DataTypes } = require('sequelize');

//bring in the food and drink models
const food = require('./food.js');
const drink = require('./drink.js');
const Collection = require('./collection.js');
const driver = require('./driver.js');
const car = require('./car.js');

//URL for sequalize to connect
const POSTGRES_URI =
  process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

//define how sequalize will connect to a DB
let sequelize = new Sequelize(POSTGRES_URI);


//export the connection that was made and turn the 'schemas' into 'models'

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
