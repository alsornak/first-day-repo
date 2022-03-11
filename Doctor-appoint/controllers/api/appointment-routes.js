const router = require("express").Router();
const { Appointments } = require("../../models");

// route to get all Patients
router.get("/", async (req, res) => {
  const appointmentData = await Appointment.findAll({
    // include: [{model: db.Doctor}]
    order: [
// Will escape username and validate DESC against a list of valid direction parameters
    ['date']
    ]
  }).catch((err) => {
    res.json(err);
  });
  const appointment = appointmentData.map((appointment) => appointment.get({ plain: true }));
  // res.render('all', { patients });
  res.status(200).json(appointment);
  //   });
});

// route to get a appointment details
router.get("/appointments/:id", function(req, res) {
  Doctor.update({
    // include: [{model: db.Doctor}],
    date: req.body.date,
    time: req.body.time,
    category: req.body.category,
    location: req.body.location,
    title: req.body.title,
    notes: req.body.notes
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(data) {
      res.redirect("/appointments");
  });
});    

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbAppointmentData = await Appointment.create({
      date: req.body.date,
      time: req.body.time,
      category: req.body.category,
      location: req.body.location,
      title: req.body.title,
      notes: req.body.notes
    });
    // req.session.save(() => {
      // req.session.loggedIn = true;

      res.status(200).json(dbAppointmentData);
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//put request to update the page when the doctor info changes
router.put('/appointments/:id', function(req, res) {
  // update a category by its `id` value
   Doctor.update({
    // include: [{model: db.Doctor}],
    date: req.body.date,
    time: req.body.time,
    category: req.body.category,
    location: req.body.location,
    title: req.body.title,
    notes: req.body.notes
  }, {
		where: {
			id: req.params.id,
		},
	})
  .then(function(data) {
    res.redirect("/appointments");
});
});    
router.delete("/appointment/:id", function(req, res) {
  Appointment.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(data) {
      res.redirect("/appointment");
  }); 
});
module.exports = router;
