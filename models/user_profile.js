"use strict";

module.exports = function(sequelize, DataTypes) {
  var UserProfile = sequelize.define("User_profile", {
    User_Account_status_id: { type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true },
    user_name: { type: DataTypes.STRING(20), allowNull: false},
    user_name: { type: DataTypes.STRING(100), allowNull: false}
  });

  return UserProfile;

};