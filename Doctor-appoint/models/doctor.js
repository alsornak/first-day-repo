const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Doctor extends Model {}

Doctor.init(
    {
        Doctor_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },

        Doctor_specialty: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        Phonenumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        Doctor_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
        Additinal_notes: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
    },
    {
        sequelize,
        timestamps: false,
        modeName: 'Doctor',
        freezeTableName: true
    }    
    
);

module.exports = Doctor;
