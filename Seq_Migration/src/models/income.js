'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    static associate(models) {
      // define association here
      Income.belongsTo(models.User, {
        foreignKey: "UserId",
        as: 'User'
      });
    }
  }
  Income.init({
    UserID: DataTypes.INTEGER,
    Source: DataTypes.STRING,
    Categories: DataTypes.STRING,
    Description: DataTypes.STRING,
    Amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Income',
    tableName: 'Incomes'
  });
  return Income;
};