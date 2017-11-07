"use strict";


module.exports = function( sequelize, DataTypes ){
        var post = sequelize.define('Post',{
            post_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            title: DataTypes.STRING(20),
            description: DataTypes.STRING(20),
            body: DataTypes.TEXT,
            path_of_images: DataTypes.STRING(20),
            created_date: DataTypes.DATEONLY
            // user_fk: DataTypes.INTEGER,
            //category_fk: DataTypes.INTEGER,
            //sub_category_fk: DataTypes.INTEGER,
        });

        post.associate = (models) => {
            post.belongsTo(models.User_Account, {foreignKey: 'user_account_fk', targetKey: 'user_account_id'});
            post.belongsTo(models.Category, {foreignKey: 'category_fk', targetKey: 'category_id'}); 
            post.belongsTo(models.Sub_category, {foreignKey: 'sub_category_fk', targetKey: 'sub_category_id'});  
        }
        return post;
};

