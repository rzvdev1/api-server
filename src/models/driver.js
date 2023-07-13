'use strict';

const driver = (sequalizeInstance, DataTypes) => {
  return sequalizeInstance.define('driver', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    licenseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

module.exports = driver;
