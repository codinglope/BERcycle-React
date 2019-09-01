const jwt = require('express-jwt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('mongoose').model('User');
const secret = process.env.SECRET

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function(username, password, done) {
  User.findOne({ username }).then(function(user) {
    if (!user) return done(null, false, {status: false, message: 'invalid credentials'});
    
    user.comparePassword(password, function(err, isMatch) {
      if (!err && isMatch) return done(null, user);

      return done(err, false, {status: false, message: 'invalid credentials'})				
    })
  }).catch(done)
}));

function getTokenFromHeader(req){
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
      req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

module.exports = jwt({
  secret: secret,
  userProperty: 'payload',
  credentialsRequired: false,
  getToken: getTokenFromHeader
});
