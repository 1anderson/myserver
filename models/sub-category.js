"use strict";
var models  = require('./index');
module.exports = function(sequelize, DataTypes){
    var subCategory = sequelize.define("Sub_category", {
        sub_category_id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        sub_category_name: DataTypes.STRING(20),
        category_fk: DataTypes.INTEGER
    });
    console.log(models);
    //models.Sub_category.belongsTo(models.Category, {foreignKey: 'category_fk', targetKey: 'category_id'});
    return subCategory;
}