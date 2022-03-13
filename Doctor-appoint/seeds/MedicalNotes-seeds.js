const { Medicalnotes } = require('../models');

const MedicalnotestData = [
    {
        Title:"Doc Visit" ,
        Location: "Melbourne",
        Description: "Stomach Ache",
        Category:"Check Up",
    },
    {
        Title:"Doc Visit",
        Location: "Melbourne",
        Description: "Quaterly Diabetic check up",
        Category:"Follow Up Visit",
    },
    {
        Title:"Doc Visit" ,
        Location: "Melbourne",
        Description: "Leg Cramps",
        Category:"Check Up",
    },
    
];

const seedMedicalnotes = () => Medicalnotes.bulkCreate(MedicalnotesData);

module.exports = seedMedicalnotes;
