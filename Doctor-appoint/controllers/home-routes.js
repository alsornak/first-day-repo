const router = require('express').Router();
const { Doctors, Patients } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all doctors
    const doctorData = await Doctors.findAll();

    // Serialize data so the template can read it
    const doctors = doctorData.map((doctor) => doctor.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('signUp');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


module.exports = router;
