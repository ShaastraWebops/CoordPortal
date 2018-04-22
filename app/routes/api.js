var User=require('../models/user');
var mongoose=require('mongoose');
var dbuser = process.env.USER;
var dbpassword = process.env.PASSWORD;
mongoose.connect('mongodb://'+dbuser+':'+dbpassword+'@ds147659.mlab.com:47659/coordapps',{ useMongoClient: true },function(err){
  if(err)
  console.log("Not Connected!!");
  else {
    console.log("Connected to mongodb!")
  }
});
module.exports = function(router){
//router= export all accessing done to server
router.post('/adduser',function(req,res){
    var user=new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.department = req.body.department;
    user.position = req.body.position;
    user.rollno = req.body.roll;
    user.app_name = req.body.app;

    user.save(function(err){
      if(err) { res.json({success: false, message: err});}
      else {
        res.json({success: true, message: 'User added'});
      }
    });
  });
  return router;
};
