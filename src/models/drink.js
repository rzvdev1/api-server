'use strict';

//define the Drink model's schema
//Drink will be the table and name/calories will be columns
const Drink = (dbInstance, DataTypes) => {
  return dbInstance.define('Drink', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

module.exports = Drink;
