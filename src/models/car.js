'use strict';

const car = (sequalizeInstance, DataTypes) => {
  return sequalizeInstance.define('car', {
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

module.exports = car;
