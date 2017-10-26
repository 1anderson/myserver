"use strict";

module.exports = function(sequelize, DataTypes){
    const sub_category = require('./sub-category')(sequelize,DataTypes);
    console.log(sub_category);
    var category = sequelize.define("Category", {
        category_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        category_name: DataTypes.STRING(20)
    });
    category.hasMany(sub_category, {foreignKey: 'category_fk', sourceKey: 'category_id'});
    
    //category.hasMany(sub_category, {as: 'sub'})
    return category;
}


