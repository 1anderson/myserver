"use strict";

module.exports = function(sequelize, DataTypes) {
  var UserAccountStatus = sequelize.define("User_account_status", {
    User_account_status_id: { type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true },
    code: { type: DataTypes.STRING(20), allowNull: false},
    name: { type: DataTypes.STRING(100), allowNull: false}
  });

  return UserAccountStatus;

};