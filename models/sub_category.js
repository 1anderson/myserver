"use strict";

module.exports = function(sequelize, DataTypes){
    var subCategory = sequelize.define("Sub_category", {
        sub_category_id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        sub_category_name: {type: DataTypes.STRING(20), allowNull: false},
    });

    return subCategory;
}