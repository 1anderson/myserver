"use strict";

module.exports = function(sequelize, DataTypes){
    var likeReplyComment = sequelize.define('Like_reply_comment',{
        like_reply_comment_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        like_reply_comment: DataTypes.BOOLEAN,
        created_date: DataTypes.DATEONLY
    });

    likeReplyComment.associate = function(models){
        likeReplyComment.belongsTo(models.Reply_comment, {foreignKey: 'reply_comment_fk', unique: true, targetKey: 'reply_comment_id'});
        likeReplyComment.belongsTo(models.User, {foreignKey: 'user_fk', unique: true, targetKey: 'user_id'});
        likeReplyComment.belongsTo(models.Like_reply_comment, {foreignKey: 'like_reply_comment_fk', unique: true, targetKey: 'like_reply_comment_id'});
    };

    return likeReplyComment;
};