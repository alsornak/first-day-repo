const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Doctor extends Model {}

Doctor.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        speciality: {
            type: DataTypes.STRING,
            allowNull: false,            
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                not: ["[a-z]",'i']
              }
        },
        location: {
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
        modeName: 'doctor',
        freezeTableName: true
    }    
    
);

module.exports = Doctor;
