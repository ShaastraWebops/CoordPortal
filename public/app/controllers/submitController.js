angular.module('submitController',['userServices','ngMaterial'])
.directive('fileModel',['$parse',function($parse){
  return{
    restrict: 'A', //restricting to attributes only
    link: function(scope,element,attrs){
      var parsedFile=$parse(attrs.fileModel);   //parsing done here
      var parsedFileSetter=parsedFile.assign;
      element.bind('change',function(){        //Watch the bound element for changes and updates the scope with this parsed file whre file-model was mentioned
        scope.$apply(function(){
          parsedFileSetter(scope,element[0].files[0]);
        });
      });
    }
  };
}])
.controller('submitCtrl',function(User,$scope,$window,$http,DEPARTMENTS,APPS){
  this.depts = DEPARTMENTS;
  this.app = APPS;
$scope.submitApp = function() {
  $scope.user.app = $scope.file.upload.name;
  $scope.user.department = $scope.department;
  $scope.user.position = $scope.position.name;
  User.addUser($scope.user).then(function(res) {
    console.log(res.data);
    if (res.data.success) {
      User.upload($scope.file).then(function(data){
        console.log(data.data);
        if (data.data.success) {
          $scope.msg = "Submitted!";
        } else {
          $scope.msg = "Error in submission";
        }
      });
    }
  });
};
});
