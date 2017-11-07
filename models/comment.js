"use strict";

module.exports = function(sequelize, DataTypes){
    var comment = sequelize.define('Comment',{
        comment_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        text: DataTypes.STRING(45),
        date_of_comment: DataTypes.DATEONLY,
    }); 

    comment.associate = function(models){
        comment.belongsTo(models.Post, {foreignKey: 'post_fk', unique: true, targetKey: 'post_id'});
        comment.belongsTo(models.User_Account, {foreignKey: 'user_account_fk', unique: true, targetKey: 'user_account_id'});
    };

    return comment;
};