const { Appointments } = require('../models');

const appointmentData = [
    {
        Date:"18/03/2022" ,
        Time: "13.45",
        Location: "Melbourne",
        Title: "Doc Visit",
        Notes:"Stomach Ache",
        Category:"Doctor Visit",
    },
    {
        Date:"20/03/2022",
        Time:"18.30",
        Location: "Melbourne",
        Title: "Doc Visit",
        Notes:"Quaterly Diabetic check up",
        Category:"Doc Visit",
    },
    {
        Date:"01/04/2022",
        Time:"15.30",
        Location: "Melbourne",
        Title: "Doc Visit",
        Notes:"Leg Cramps",
        Category:"Personal",
    },
    
];

const seedAppointments = () => Appointments.bulkCreate(appointmentData);

module.exports = seedAppointments;
