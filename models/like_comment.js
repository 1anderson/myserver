"use strict";

module.exports = function(sequelize, DataTypes){
    var likeComment = sequelize.define('Like_comment',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        like_comment: {type: DataTypes.BOOLEAN, allowNull: false},
        created_date: {type: DataTypes.DATEONLY, allowNull: false}
    });

    likeComment.associate = function(models){
        likeComment.belongsTo(models.Comment, {foreignKey: 'comment_fk', unique: true, targetKey: 'id'});
        likeComment.belongsTo(models.User_profile, {foreignKey: 'user_profile_fk', unique: true, targetKey: 'id'});
    };

    return likeComment;
};