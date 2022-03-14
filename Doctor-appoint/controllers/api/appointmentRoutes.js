// Dependencies
const router = require("express").Router();
const { Appointment } = require("../../models");
const withAuth = require("../../utils/auth");

// creating router

  
  router.get("/appointment", function(req, res) {
      Appointment.findAll({
        
        order: [
    
        ['date']
        ]
      }).then(function(data) {
          console.log(data)    
        var displayAppointment = {
        appointment: data,  
        date: data.date
      }
        console.log(displayAppointment);
       res.render("index", displayAppointment);
      });
  });



  // post request to add a new to do item to the list of doctors
  // redirected back the the get request to show all the doctors, including the new one on the page
  router.post("/appointment", function(req, res) {
      Appointment.create({
        // include: [{model: db.Doctor}],
        date: req.body.date,
        time: req.body.time,
        category: req.body.category,
        location: req.body.location,
        title: req.body.title,
        notes: req.body.notes
      }).then(function(data){
        res.redirect("/appointment");
      });
  });



  
  router.put("/appointment/:id", function(req, res) {
      Doctor.update({
        
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
          res.redirect("/appointment");
      });
   });    

        // delete request to delete an appointment
  router.delete("/appointment/:id", function(req, res) {
      Appointment.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(data) {
          res.redirect("/appointment");
      }); 
  });
// export routers
module.exports = router;