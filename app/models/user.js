var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');

var emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Not a Valid Email'
  })
];


var userSchema = new Schema({
  name: {type: String, required: true},
  rollno: {type: String, required: true},
  email: {type: String, required: true, validate: emailValidator},
  department: {type: String, required: true},
  position: {type: String, required: true},
  vertical: {type: String, default: 'Not Applicable (only for Events)'},
  app_name: {type: String, required: true}
});

userSchema.plugin(titlize,{
  paths: ['name']
});

 module.exports = mongoose.model('User',userSchema);
