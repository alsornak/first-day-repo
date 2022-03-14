// Dependencies
// creating router
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


// Route to render the signUp page
  router.get("/users", function(req, res) {
    res.render("signUp");
  });

// Route to render the signIn page
  router.get("/users/login", function(req, res) {
    res.render("signIn");
  });

// Route to create a new user
  router.post("/users", function(req, res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function(data){
      console.log(data.dataValues.id);

      res.redirect("/users/" + data.dataValues.id);
    });
  });

// Route to render the homepage with a specific users information from the different tables
  router.get("/users/:id", function(req, res) {
   User.findOne({
      include: [{model: appointment}, {model: todo}, {model: medicalnotes}],
    where: {
      id: req.params.id
    }
    }).then(function(data) {   
        var cleanData = JSON.parse(JSON.stringify(data));
        console.log(cleanData)
     res.render("index", {user: data});
    });
  });


// APPOINTMENT ROUTES
 // Post request to create a new appointment
  router.post("/appointment/:id", function(req, res) {
   Appointment.create({
      date: req.body.date,
      time: req.body.time,
      category: req.body.category,
      location: req.body.location,
      title: req.body.title,
      notes: req.body.notes,
      user_id: req.params.id,
    }).then(function(data){
      res.redirect("back");
    });
  });

// Put request to update the page when the doctor info changes
  router.put("/appointments/:id", function(req, res) {
   Appointment.update({
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
        res.redirect("back");
    });
  });    

// Delete request to delete an appointment
  router.delete("/appointment/:id", function(req, res) {
    Appointment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
        console.log(data);
        res.redirect("back");
    }).catch(function(err){
        console.log(err);
    }); 
  });


// TODO ROUTES
// Post request to add a new to do item to the list of to do items
  router.post("/todo/:id", function(req, res) {
    ToDo.create({
      user_id: req.params.id,
      toDo: req.body.toDo
      
    }).then(function(data){
        console.log(data);

      res.redirect('back');
    });
  });

// Put request to update the page when the to do item changes
  router.put("/todo/:id", function(req, res) {
   ToDo.update({
      toDo: req.body.toDo
    }, {
      where: 
      {
        id: req.params.id 
      }
    }).then(function(data) {
      var cleanData = JSON.parse(JSON.stringify(data));
        console.log("CLEAN DATA:" + cleanData);
      var object = {
          modal: data
        }
        res.redirect('back');
    });
  });  

// Delete request to delete a to do item
  router.delete("/todo/:id", function(req, res) {
   ToDo.destroy({
      where: {
        user_id: req.params.id
      }
    }).then(function(data) {

        res.redirect('back');
    });     
  });



// MEDICAL NOTES ROUTES
// Post request to add a new to do item to the list of medical notes
  router.post("/medicalnotes/:id", function(req, res) {
    Medicalnotes.create({
      user_id: req.params.id,
      title: req.body.title,
      location: req.body.location,
      content: req.body.content,
      category: req.body.category

    }).then(function(data){
      res.redirect("back");
    });
  });

// Put request to update the page when the medical notes info changes
  router.put("/medicalnotes/:id", function(req, res) {
    Medicalnotes.update({
      title: req.body.title,
      location: req.body.location,
      content: req.body.content,
      category: req.body.category
    }, 
    {
      where: {
        user_id: req.params.id
      }
    }).then(function(data) {
        res.redirect("back");
    });
  });

// Delete route to delete a medical note
  router.delete("/medicalNotes/:id", function(req, res) {
    db.MedNotes.destroy({
      where: {
        user_id: req.params.id
      }
    }).then(function(data) {
        res.redirect("back");
    }); 
  });    

//DOCTORS

 // get request to show the index.handlebars on the page 
  router.get("/users/doctors/:id", function(req, res) {
   User.findOne({
        include: [{model: doctor}],
      where: {
        user_id: req.params.id
      }
      }).then(function(data) {
          var cleanData = JSON.parse(JSON.stringify(data));
          console.log(cleanData)
       res.render("doctor", {user: data});
      });
  });

// Post request to add a new to do item to the list of doctors
  router.post("/users/doctor/:id", function(req, res) {
      Doctor.create({
        user_id: req.params.id,
        name: req.body.name,
        phone: req.body.phone,
        speciality: req.body.speciality,
        location: req.body.location,
        notes: req.body.notes
      }).then(function(data){
        res.redirect("back");
      });
  });

// Put request to update the page when the doctor info changes
  router.put("/users/doctor/:id", function(req, res) {
      Doctor.update({
        name: req.body.name,
        phone: req.body.phone,
        specialty: req.body.specialty,
        location: req.body.location,
        notes: req.body.notes
      }, {
        where: {
          user_id: req.params.id
        }
      }).then(function(data) {
          res.redirect("back");
      });
    });  

// Delete request to delete a doctor
  router.delete("/users/doctor/:id", function(req, res) {
      Doctor.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(data) {
          res.redirect("back");
      });
  });     

// export routers
module.exports = router;