const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Appointment extends Model {}

Appointment.init(
    {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false, 
        },

        time: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
        notes: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
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
        modeName: 'appointment',
        freezeTableName: true
    }    
    
);

module.exports = Appointment;
