"use strict";

module.exports = function(sequelize, DataTypes){
    var category = sequelize.define("Category", {
        category_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        category_name: DataTypes.STRING(20)
    });
    
    category.associate = (models) => {
        category.hasMany(models.Sub_category, {foreignKey: 'category_fk', sourceKey: 'category_id'});
    }
    return category;
}


