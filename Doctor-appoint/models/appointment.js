const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Appointments extends Model {}

Appointments.init(
    {
        date: {
            type: DataTypes.DATE,
            allowNull: false, 
        },

        time: {
            type: DataTypes.TIME,
            allowNull: false,
            
        },

        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
       
        notes: {
            type: DataTypes.STRING,
            allowNull: false, 
        },

        Category: {
            type: DataTypes.STRING,
            allowNull: false,

        },
    },
    {
        sequelize,
        timestamps: false,
        modeName: 'appointments',
        freezeTableName: true
    }    
    
);

module.exports = Appointments;
