"use strict";

module.exports = function(sequelize, DataTypes) {
    const author = sequelize.define("Author", {
        id: { type: DataTypes.INTEGER, primaryKey: true},
        name: { type: DataTypes.STRING, allowNull:  false },
        date_of_creation: { type: DataTypes.DATEONLY, allowNull: false },
    });
    
    author.associate = function(models) {
        author.belongsTo(models.User_profile, {foreignKey: 'user_profile_fk', targetKey: 'id'});
    }

    return author;
}