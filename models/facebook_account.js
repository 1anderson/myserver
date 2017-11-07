"use strict";

module.exports = function(sequelize, DataTypes) {
  var facebookAccount = sequelize.define("Facebook_account", {
    facebook_id: { type: DataTypes.STRING(100), allowNull: false},
    user_profile_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false}
  });

  facebookAccount.associate = function(models){
    facebookAccount.belongsTo(models.User_profile, {foreignKey: 'user_profile_id',targetKey: 'user_profile_id'});
  }

  return facebookAccount;

};