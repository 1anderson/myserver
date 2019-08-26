'use strict';

module.exports = function(sequelize, DataTypes){
    var subCategory = sequelize.define("Sub_category", {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        name: {type: DataTypes.STRING(20), allowNull: false, unique:{msg: 'Sub category exists'}},
    });

    return subCategory;
}