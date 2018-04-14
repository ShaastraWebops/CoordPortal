var User=require('../models/user');
var mongoose=require('mongoose');
var fs=require('fs');
mongoose.connect('mongodb://localhost:27017/webapp',function(err){
  if(err)
  console.log("Not Connected!!");
  else {
    console.log("Connected to mongodb!")
  }
});
module.exports = function(router){
//router= export all accessing done to server


  return router;
};
