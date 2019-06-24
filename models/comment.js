"use strict";

module.exports = function(sequelize, DataTypes){
    var comment = sequelize.define('Comment',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        text: {type: DataTypes.STRING(255), allowNull: false},
        date_of_comment: {type:DataTypes.DATEONLY, allowNull: false},
        post_id: { type: DataTypes.INTEGER, allowNull:false },
    }); 

    comment.associate = function(models){
        comment.belongsTo(models.Post, {foreignKey: 'post_fk', targetKey: 'id'});
        comment.belongsTo(models.User_profile, {foreignKey: 'user_profile_fk', targetKey: 'id'});
    };

    return comment;
};