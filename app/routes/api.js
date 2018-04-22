var User=require('../models/user');
var mongoose=require('mongoose');
var dbuser = process.env.USER;
var dbpassword = process.env.PASSWORD;
var fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
mongoose.connect('mongodb://'+dbuser+':'+dbpassword+'@ds147659.mlab.com:47659/coordapps',function(err){
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
    if (req.body.vertical) {
      user.vertical = req.body.vertical;
    }

    user.save(function(err){
      if(err) { res.json({success: false, message: err});}
      else {
        res.json({success: true, message: 'User added'});
      }
    });
  });
  router.get('/getusers/:token/:department',function(req,res){
     if (req.params.token === process.env.TOKEN) {
      User.find({department: req.params.department}, function(err, users) {
        var fields;
        if (req.params.department === 'Events') {
        fields = ['name','rollno','position','vertical','email','app_name'];
      } else {
        fields = ['name','rollno','position','email','app_name'];
      }
        const opts = { fields };
        const parser = new Json2csvParser(opts);
        var csv = parser.parse(users);
                  var path=req.params.department+'.csv';
                   fs.writeFile(path, csv, function(err,data) {
                    if (err) {throw err;}
                    else{
                      res.download(path); // This is what you need
                    }
                  });
      });
    } else {
      res.json(null);
    }
    });
  return router;
};
