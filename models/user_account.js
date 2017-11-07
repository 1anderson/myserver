"use strict";

module.exports = function(sequelize, DataTypes) {
  var UserAccount = sequelize.define("User_Account", {
    user_account_id: { type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true },
    user_name: { type: DataTypes.STRING(30), allowNull: false},
    password:{ type: DataTypes.STRING(200), allowNull: false},
    password_salt:{ type: DataTypes.STRING(50), allowNull: false},
    password_hash_algorithm:{ type: DataTypes.STRING(50), allowNull: false},
    role: { type: DataTypes.STRING(50), allowNull: false},
    date_of_creation: { type: DataTypes.DATEONLY, allowNull: false },
    email: { type: DataTypes.STRING(254), allowNull: false, unique: true },
    registration_time: { type: DataTypes.DATE, allowNull: false},
    email_confirmation_token: { type: DataTypes.STRING(100), allowNull: false},
    password_reminder_token: { type: DataTypes.STRING(100), allowNull: false},
    password_reminder_expire: { type: DataTypes.DATE, allowNull: false}
  });

  UserAccount.associate = function(models){
    UserAccount.belongsTo(models.User_Account_status, {foreignKey: 'User_Account_status_fk', unique: true, targetKey: 'User_Account_status_id'});
    
  }
  return UserAccount;
};