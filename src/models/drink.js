'use strict';
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
