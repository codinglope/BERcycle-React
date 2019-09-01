const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Place = mongoose.model('Place');
const passport = require('passport');
var geo = require('mapbox-geocoding');
const authRequired = require('./auth');

router.get('/locations', (req, res, next)=>{
  Place.find().then(place=>{
    res.json(place)
  })
})

router.post('/register', (req, res, next) => {
  const user = new User();

  user.name = req.body.name;
  user.username = req.body.username;
  user.password = req.body.password;

  user
    .save()
    .then(function(savedUser) {
      res.json({ token: savedUser.generateJWT() });
    })
    .catch(next);
});

router.post('/login', (req, res, next) => {
  if (!req.body.username) {
    return res.status(400).json({ message: "username can't be blank" });
  }

  if (!req.body.password) {
    return res.status(400).json({ message: "password can't be blank" });
  }
  console.log('body', req.body)
  passport.authenticate("local", { session: false }, function(err, user, info) {
    if (err) return next(err);

    if (!user) return res.status(401).json(info);

    return res.json({ token: user.generateJWT() });
  })(req, res, next);
});


router.post('/map', authRequired, (req, res, next) => {
  const { name, locations } = req.body

  geo.geocode('mapbox.places', locations, function (err, geoData) {
    console.log(geoData);
     Place.create({
      name, location: {
        type: 'Point',
        coordinates: 
        geoData.features[0].center
      }
    })
    .then(data => { res.json({ status: true }) })
    .catch(next) 
});

});

module.exports = router