"use strict";

module.exports = function(sequelize, DataTypes){
    var likeComment = sequelize.define('Like_comment',{
        like_comment_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        like_comment: DataTypes.BOOLEAN,
        created_date: DataTypes.DATEONLY
    });

    likeComment.associate = function(models){
        likeComment.belongsTo(models.Comment, {foreignKey: 'comment_fk', unique: true, targetKey: 'comment_id'});
        likeComment.belongsTo(models.User_Account, {foreignKey: 'user_account_fk', unique: true, targetKey: 'user_account_id'});
    };

    return likeComment;
};