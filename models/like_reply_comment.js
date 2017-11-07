"use strict";

module.exports = function(sequelize, DataTypes){
    var likeReplyComment = sequelize.define('Like_reply_comment',{
        like_reply_comment_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        like_reply_comment: {type: DataTypes.BOOLEAN, allowNull: false},
        created_date: {type: DataTypes.DATEONLY, allowNull: false}
    });

    likeReplyComment.associate = function(models){
        likeReplyComment.belongsTo(models.Reply_comment, {foreignKey: 'reply_comment_fk', unique: true, targetKey: 'reply_comment_id'});
        likeReplyComment.belongsTo(models.User_profile, {foreignKey: 'user_profile_fk', unique: true, targetKey: 'user_profile_id'});
        likeReplyComment.belongsTo(models.Like_reply_comment, {foreignKey: 'like_reply_comment_fk', unique: true, targetKey: 'like_reply_comment_id'});
    };

    return likeReplyComment;
};