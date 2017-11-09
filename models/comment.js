"use strict";

module.exports = function(sequelize, DataTypes){
    var comment = sequelize.define('Comment',{
        comment_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        text: {type: DataTypes.STRING(45), allowNull: false},
        date_of_comment: {type:DataTypes.DATEONLY, allowNull: false}
    }); 

    comment.associate = function(models){
        comment.belongsTo(models.Post, {foreignKey: 'post_fk', targetKey: 'post_id'});
        comment.belongsTo(models.User_profile, {foreignKey: 'user_profile_fk', targetKey: 'user_profile_id'});
    };

    return comment;
};