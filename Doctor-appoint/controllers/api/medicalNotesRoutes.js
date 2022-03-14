// Dependencies
const router = require("express").Router();
const { Medicalnotes } = require("../../models");

  // get request to show the index.handlebars on the page 
  // shows all of the medical notes items currently in the database on the page
  router.get("/medicalnotes", function(req, res) {
      Medicalnotes.findAll({
      }).then(function(data) {
          console.log(data)    
       res.render("index", {Medicalnotes: data});
      });
  });
  
  router.post("/medicalnotes", function(req, res) {
      Medicalnotes.create({
        title: req.body.title,
        location: req.body.location,
        content: req.body.content
 
      }).then(function(data){
        res.redirect("/medicalnotes");
      });
  });


  // put request to update the page when the medical notes info changes
  router.put("/medicalnotes/:id", function(req, res) {
      Medicalnotes.update({
        title: req.body.title,
        location: req.body.location,
        content: req.body.content
      }, 
      {
        where: {
          id: req.params.id
        }
      }).then(function(data) {
          res.redirect("/medicalNotes");
      });

      
  });
// export routers
module.exports = router;