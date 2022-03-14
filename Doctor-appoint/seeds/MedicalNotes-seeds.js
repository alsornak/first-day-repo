const { Medicalnotes } = require('../models');

const MedicalnotestData = [
    {
        title:"Doc Visit" ,
        location: "Melbourne",
        content: "Stomach Ache",
        category:"Check Up",
        user_id:1,
    },
    {
        title:"Doc Visit",
        location: "Melbourne",
        content: "Quaterly Diabetic check up",
        category:"Follow Up Visit",
        user_id:2,
    },
    {
        title:"Doc Visit" ,
        location: "Melbourne",
        content: "Leg Cramps",
        category:"Check Up",
        user_id:3,
    },
    
];

const seedMedicalnotes = () => Medicalnotes.bulkCreate(MedicalnotesData);

module.exports = seedMedicalnotes;
