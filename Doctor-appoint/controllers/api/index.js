const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const doctorRoutes = require('./doctorRoutes.js');
const appointmentRoutes = require('./appointmentRoutes.js');
const todoRoutes = require('./todoRoutes.js');

router.use('/todo', todoRoutes);
router.use('/doctor', doctorRoutes);
router.use('/appointment', appointmentRoutes);
router.use('/user', userRoutes);

module.exports = router;
