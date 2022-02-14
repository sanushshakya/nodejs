'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    static associate(models) {
      // define association here
    }
  }
  Income.init({
    Source: DataTypes.STRING,
    Categories: DataTypes.STRING,
    Description: DataTypes.STRING,
    Amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Income',
  });
  return Income;
};