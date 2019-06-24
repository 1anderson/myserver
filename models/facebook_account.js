"use strict";

module.exports = function(sequelize, DataTypes) {
  var facebookAccount = sequelize.define("Facebook_account", {
    id: { type: DataTypes.STRING(100), allowNull: false},
    user_profile_fk: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false}
  });

  facebookAccount.associate = function(models){
    facebookAccount.belongsTo(models.User_profile, {foreignKey: 'user_profile_fk',targetKey: 'id'});
  }

  return facebookAccount;

};