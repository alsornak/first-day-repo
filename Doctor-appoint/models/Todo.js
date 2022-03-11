const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Todo extends Model {}

Todo.init(
    {
        toDo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          }   
    },
    {
        sequelize,
        timestamps: false,
        modeName: 'todo',
        freezeTableName: true
    }    
    
);

module.exports = Todo;
