"use strict";

module.exports = function(sequelize, DataTypes){
    var replyComment = sequelize.define('Reply_comment',{
        reply_comment_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        text: {type: DataTypes.STRING(45), allowNull: false},
        date_of_reply_comment: {type: DataTypes.DATEONLY, allowNull: false}
    });


    replyComment.associate = function(models){
        replyComment.belongsTo(models.Comment, {foreignKey: 'comment_fk', unique: true, targetKey: 'comment_id'});
        replyComment.belongsTo(models.User_profile, {foreignKey: 'user_profile_fk', unique: true, targetKey: 'user_profile_id'});
    };

    return replyComment;
};