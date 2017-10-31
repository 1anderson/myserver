"use strict";

module.exports = function( sequelize, DataTypes ){
        var post = sequelize.define('Post',{
            post_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            title: DataTypes.VARCHAR(20),
            description: DataTypes.VARCHAR(20),
            body: DataTypes.TEXT,
            path_of_images: DataTypes.VARCHAR(20),
            created_date: DataTypes.DATEONLY,
            user_fk: DataTypes.INTEGER,
            category_fk: DataTypes.INTEGER,
            sub_category_fk: DataTypes.INTEGER,
        });

        post.associate = (models) => {
            
        }
};