'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    static associate(models) {
      // define association here
    }
  }
  Expense.init({
    Name: DataTypes.STRING,
    Categories: DataTypes.STRING,
    Description: DataTypes.STRING,
    Amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};