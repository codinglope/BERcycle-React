const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name:String,
  username: {
    type:String,
    unique:true
  },
  
email: String,
password: {
  type: String,
  required: true
},
  githubId: String,
  facebookId: String
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});


// Before saving the user, hash the password if changed
UserSchema.pre('save', function(next) {
  const user = this;
  console.log('presave', user, user.isModified('password'))
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, function(error, hash) {
      if (error) { return next(error); }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password || '', function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};


UserSchema.methods.generateJWT = () => {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 3);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, process.env.SECRET);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;




