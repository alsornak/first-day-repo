const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class ToDo extends Model {}

ToDo.init(
    {
      toDo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
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
        modeName: 'todo',
        freezeTableName: true
    }    
    
);
module.exports = ToDo;
