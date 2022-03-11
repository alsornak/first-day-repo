const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Mednotes extends Model {}

Mednotes.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
          },
        location: {
            type: DataTypes.STRING,            
        },
        content: {
            type: DataTypes.STRING,            
        }        
    },
    {
        sequelize,
        timestamps: false,
        modeName: 'mednotes',
        freezeTableName: true
    }    
    
);

module.exports = Mednotes;
