const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
   
    res.render('signup');
  
  });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/index');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/index');
    return;
  }

  res.render('signup');
});
// Route to create a new user
router.post("/users", function(req, res) {
  User.create({
    username: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(function(data){
    console.log(data.dataValues.id);

    res.redirect("/users/" + data.dataValues.id);
  });
});





module.exports = router;
