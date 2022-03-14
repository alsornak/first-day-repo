const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedAppointment = require('./Appointment-seeds');
const seedMedicalnotes = require('./Medicalnotes-seeds');
const seedDoctor = require('./doctor-seeds');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---- DATABASE SYNCED----\n');
    
    await seedUser();
    console.log('\n---- User SEEDED ----\n');

    await seedAppointment();
    console.log('\n---- User SEEDED ----\n');

    await seedMedicalnotes();
    console.log('\n---- User SEEDED ----\n');

    await seedDoctor();
    console.log('\n---- User SEEDED ----\n');
    
    process.exit(0);
};

seedAll();
