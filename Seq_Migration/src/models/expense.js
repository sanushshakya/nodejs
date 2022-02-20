'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    static associate(models) {
      // define association here
      Expense.belongsTo(models.User, {
        foreignKey: "UserId",
        as: 'User'
      })
    }
  }
  Expense.init({
    UserID: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Categories: DataTypes.STRING,
    Description: DataTypes.STRING,
    Amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Expense',
    tableName: 'Expenses'
  });
  return Expense;
};