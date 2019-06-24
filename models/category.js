"use strict";

module.exports = function(sequelize, DataTypes){
    var category = sequelize.define("Category", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        name: {type:DataTypes.STRING(20), allowNull: false, unique:{msg: "Category exists"}}
    });
    
    category.associate = (models) => {
        category.hasMany(models.Sub_category, {foreignKey: 'category_fk', sourceKey: 'id'});
    }
    return category;
}


