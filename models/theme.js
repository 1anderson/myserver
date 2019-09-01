"use strict";

module.exports = function(sequelize, DataTypes) {
    var theme = sequelize.define("Theme", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        name: {type:DataTypes.STRING(50), allowNull: false, unique:{msg: "Theme exists"}}
    });

    theme.associate = (models) => {
        theme.hasMany(models.Category, {foreignKey: 'theme_fk', sourceKey: 'id', as: 'categories'});
    }
    return theme;
}