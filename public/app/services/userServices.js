angular.module('userServices',[])
.factory('User',function($http){
  userfactory = [];
userfactory.upload=function(file) {
  var fd= new FormData();
  fd.append('image',file.upload);   //image is the name given to the browse label and file.upload contains the data as it is the call to the fileModel.js
  return $http.post('/upload',fd,{
    transformRequest: angular.identity,
    headers: {'Content-Type': undefined }  //To make the form data in a valid type so as to send to server in a usable format as Angular serialises it
  });
};


return userfactory;
});
