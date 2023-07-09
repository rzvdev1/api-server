'use strict';
const Food = (dbInstance, DataTypes) => {
  return dbInstance.define('Food', {
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

module.exports = Food;
