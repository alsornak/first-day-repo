const { Appointment } = require('../models');

const appointmentData = [
    {
        date:"18/03/2022" ,
        time: "13.45",
        location: "Melbourne",
        title: "Doc Visit",
        notes:"Stomach Ache",
        user_id: 1,
        
    },
    {
        date:"20/03/2022",
        time:"18.30",
        location: "Melbourne",
        title: "Doc Visit",
        notes:"Quaterly Diabetic check up",
        user_id: 2,
        
    },
    {
        date:"01/04/2022",
        time:"15.30",
        location: "Melbourne",
        title: "Doc Visit",
        notes:"Leg Cramps",
        user_id: 3,
        
    },
    
];

const seedAppointment = () => Appointment.bulkCreate(appointmentData);

module.exports = seedAppointment;
