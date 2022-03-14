// Dependencies
const router = require("express").Router();
const { ToDo } = require("../../models");

  // get request to show the index.handlebars on the page 
  // shows all of the to do items currently in the database on the page
  router.get("/todo", function(req, res) {
      ToDo.findAll({
      }).then(function(data) {
          console.log(data)    
       res.render("index", {todo: data});
      });
  });



  // post request to add a new to do item to the list of to do items
  // redirected back the the get request to show all the to do items, including the new one on the page
  router.post("/todo", function(req, res) {
      ToDo.create({
        toDo: req.body.toDo
      }).then(function(data){
        res.redirect("/todo");
      });
  });



  // put request to update the page when the to do item changes
  router.put("/todo/:id", function(req, res) {
      ToDo.update({
        toDo: req.body.toDo
      }, {
        where: {
          id: req.params.id
        }
      }).then(function(data) {
          res.redirect("/todo");
      });
    });

  // delete request to delete a to do item
  router.delete("/todo/:id", function(req, res) {
      ToDo.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(data) {
          res.redirect("/todo");
      });     
  });
// export routers
module.exports = router;