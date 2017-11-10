"use strict";

module.exports = function(sequelize, DataTypes) {
  var UserProfile = sequelize.define("User_profile", {
    user_profile_id: { type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true },
    name: { type: DataTypes.STRING(20), allowNull: false},
    last_name: { type: DataTypes.STRING(20), allowNull: false},
    email: { type: DataTypes.STRING(254), allowNull: false, unique: true }
  });

  return UserProfile;

};