const { ToDo } = require('../models');

const ToDoData = [
    {
        toDo: "Have a checkup on upcoming week",
        user_id:1,
    },
        
];

const seedToDo = () => ToDo.bulkCreate(MedicalnotesData);

module.exports = seedToDo;
