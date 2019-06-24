"use strict";


module.exports = function( sequelize, DataTypes ){
        var post = sequelize.define('Post', {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
            title: { type: DataTypes.STRING(20), allowNull: false, unique: { msg: "Post with this title already exists" } },
            description: { type: DataTypes.STRING(20), allowNull: false },
            path_of_images: { type: DataTypes.STRING(100), allowNull: true },
            created_date: { type: DataTypes.DATEONLY, allowNull: false },
            user_profile_fk: { type: DataTypes.INTEGER, allowNull:false },
            category_fk: { type: DataTypes.INTEGER, allowNull:false },
            sub_category_fk: { type: DataTypes.INTEGER, allowNull:false }
        });

        post.associate = ( models ) => {
            post.belongsTo (models.User_profile, { foreignKey: 'user_profile_fk', targetKey: 'id' } );
            post.belongsTo( models.Category, {foreignKey: 'category_fk', targetKey: 'id'}); 
            post.belongsTo( models.Sub_category, { foreignKey: 'sub_category_fk', targetKey: 'id' } );  
        }
        return post;
};

