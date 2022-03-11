const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      },
    },
  },
  //   {
  //     // We're saying that we want our User to have medNotes, todo, doctor
  //     classMethods: {
  //       associate: function(models) {
  //         // Associating User with the medNotes, todo, and doctors
  //         // User.hasMany(models.MedNotes, {
  //         //   onDelete: "cascade"
  //         // });

  //         // User.hasMany(models.ToDo, {
  //         //   onDelete: "cascade"
  //         // });

  //         // User.hasMany(models.Doctor, {
  //         //   onDelete: "cascade"
  //         // });

  //         User.hasMany(models.Appointment, {
  //           onDelete: "cascade"
  //         });
  //       }
  //     }
  // }
  

  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;



//module.exports = User;
//  User.associate = function(models){
 //   User.hasMany(models.Appointment)
  //  User.hasMany(models.ToDo)
  //  User.hasMany(models.MedNotes)
  //  User.hasMany(models.Doctor)
 // }

  // User.associate = function(models){
  //   User.hasMany(models.ToDo)
  // }

  // User.associate = function(models){
  //   User.hasMany(models.MedNotes)
  // }

  // User.associate = function(models){
    
  // }
 // return User;
//};
