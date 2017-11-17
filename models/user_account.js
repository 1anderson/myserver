"use strict";

module.exports = function(sequelize, DataTypes) {
  var UserAccount = sequelize.define("User_account", {
    user_account_id: { type: DataTypes.INTEGER, primaryKey: true},
    password:{ type: DataTypes.STRING(200), allowNull: false},
    role: { type: DataTypes.STRING(50), allowNull: false},
    date_of_creation: { type: DataTypes.DATEONLY, allowNull: false },
    email: { type: DataTypes.STRING(254), allowNull: false, unique: true },
    active_account: {type: DataTypes.BOOLEAN, allowNull: false},
    password_reminder_token: { type: DataTypes.STRING(100), allowNull: true},
    password_reminder_expire: { type: DataTypes.DATE, allowNull: true}
  });

  UserAccount.associate = function(models){
    UserAccount.belongsTo(models.User_account_status, {foreignKey: 'user_account_status_fk', unique: true, targetKey: 'user_account_status_id'});
    UserAccount.belongsTo(models.User_profile, {foreignKey: 'user_account_id', targetKey: 'user_profile_id'});
    
  }
  return UserAccount;
};