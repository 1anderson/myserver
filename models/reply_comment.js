"use strict";

module.exports = function(sequelize, DataTypes){
    var replyComment = sequelize.define('Reply_comment',{
        reply_comment_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        text: DataTypes.STRING(45),
        date_of_reply_comment: DataTypes.DATEONLY,
    });


    replyComment.associate = function(models){
        replyComment.belongsTo(models.Comment, {foreignKey: 'comment_fk', unique: true, targetKey: 'comment_id'});
        replyComment.belongsTo(models.User_Account, {foreignKey: 'user_account_fk', unique: true, targetKey: 'user_account_id'});
    };

    return replyComment;
};