"use strict";


module.exports = function( sequelize, DataTypes ){
        var post = sequelize.define('Post',{
            post_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
            title: {type: DataTypes.STRING(20), allowNull: false, unique: {msg: "Post with this title already exists"}},
            description: {type: DataTypes.STRING(20), allowNull: false},
            body: {type: DataTypes.TEXT, allowNull: false},
            path_of_images: {type: DataTypes.STRING(100), allowNull: true},
            created_date: {type: DataTypes.DATEONLY, allowNull: false}
        });

        post.associate = (models) => {
            post.belongsTo(models.User_profile, {foreignKey: 'user_profile_fk', targetKey: 'user_profile_id'});
            post.belongsTo(models.Category, {foreignKey: 'category_fk', targetKey: 'category_id'}); 
            post.belongsTo(models.Sub_category, {foreignKey: 'sub_category_fk', targetKey: 'sub_category_id'});  
        }
        return post;
};

