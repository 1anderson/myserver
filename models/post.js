"use strict";
//import getModel from '../models';
//console.log(getModel);
export default (sequelize, DataTypes) => {
    var post = sequelize.define("Post", {
        post_id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title : DataTypes.STRING(20),
        description : DataTypes.STRING(30),
        category_fk: DataTypes.INTEGER,
        body: DataTypes.TEXT,
        path_of_images: DataTypes.STRING(20),
        sub_category_ID: DataTypes.INTEGER,
        category_fk: DataTypes.INTEGER,
        user_fk: DataTypes.INTEGER,
        Created_date: DataTypes.DATEONLY
    });
    return post;
}; 