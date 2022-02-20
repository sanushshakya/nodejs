'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Income, {
        foreignKey: 'UserID',
        as: "Income"
      });

      User.hasMany(models.Expense, {
        foreignKey: 'UserID',
        as: "Expense"
      });
    }
    // toJSON() {
    //   return { ...get(), Password: undefined, createdAt: undefined, updatedAt: undefined };
    // }
  }
  User.init({
    Name: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tablename: "Users"
  });
  return User;
};