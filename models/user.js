"use strict";


module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_id: { type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true },
    name: DataTypes.STRING(30),
    login: DataTypes.STRING(20),
    password: DataTypes.STRING(20),
    role: DataTypes.STRING(15),
    date_of_creation: DataTypes.DATEONLY
  });
  return User;
};