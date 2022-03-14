const { Doctor } = require('../models');

const doctorData = [
    {
        name:"Alex" ,
        speciality: "ortho",
        phone: "0439567823",
        location: "Mel",
        notes:"To visit",
        user_id: 1,
      },
      {
        name:"Sam" ,
        speciality: "neuro",
        phone: "0435567823",
        location: "Mel",
        notes:"To visit",
        user_id: 2,
      },
        
];

const seedDoctor = () => Appointment.bulkCreate(doctorData);

module.exports = seedDoctor;
