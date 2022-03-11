const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Appointment extends Model {}

Appointment.init(
    {
        appointments_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATEONLY,            
        },
        time: {
            type: DataTypes.STRING,            
        },
        category: {
            type: DataTypes.STRING,            
        },
        location: {
            type: DataTypes.STRING,            
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        notes: {
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

module.exports = Appointment;
