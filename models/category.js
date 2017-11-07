"use strict";

module.exports = function(sequelize, DataTypes){
    var category = sequelize.define("Category", {
        category_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        category_name: {type:DataTypes.STRING(20), allowNull: false}
    });
    
    category.associate = (models) => {
        category.hasMany(models.Sub_category, {foreignKey: 'category_fk', sourceKey: 'category_id'});
    }
    return category;
}


