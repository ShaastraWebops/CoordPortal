var User=require('../models/user');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/webapp',function(err){
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
      if(err) { res.json(err);}
      else {
        res.json({success: true, message: 'User added'});
      }
    });
  });
  return router;
};
