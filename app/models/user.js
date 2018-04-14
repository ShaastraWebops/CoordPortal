var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');

var nameValidator = [
  validate({
    validator: 'matches',
    arguments: /^(([a-zA-Z]{1,20})+[ ]+([a-zA-Z]{1,20})+)+$/,
    message: 'There should be a first name and a surname with no special characters or numbers '
  })
];

var emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Not a Valid Email'
  }),
  validate({
    validator: 'isLength',
    arguments: [3,30],
    message: 'Email length should be between 3 and 30 characters'
  })
];

var userValidator = [
  validate({
    validator: 'isLength',
    arguments: [3,30],
    message: 'Username length should be between 3 and 30 characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    message: 'Username must contain letters and numbers only'
  })
];

var userSchema = new Schema({
  name: {type: String, required: true, validate: nameValidator},
  username: {type: String, required: true, unique: true, validate: userValidator},
  email: {type: String, required: true, unique: true, validate: emailValidator}
});

userSchema.plugin(titlize,{
  paths: ['name']
});

 module.exports = mongoose.model('User',userSchema);
