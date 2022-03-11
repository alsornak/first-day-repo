const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Doctor extends Model {}

Doctor.init(
    {
        doctors_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
          }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              not: ["[a-z]",'i']
            }
        },        
        speciality: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                is: ["^[a-z]+$",'i']
            } 
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
          }, 
          notes: {
            type: DataTypes.STRING,
            allowNull: true
          }             
    },
    {
            sequelize,
            timestamps: false,
            modeName: 'doctors',
            freezeTableName: true
    },
);

module.exports = Doctor;
