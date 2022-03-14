const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Medicalnotes extends Model {}

Medicalnotes.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        location: DataTypes.STRING,
        content: DataTypes.TEXT,
        category: DataTypes.STRING,
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        modeName: 'medicalnotes',
        freezeTableName: true
    }    
    
);

module.exports = Medicalnotes;
