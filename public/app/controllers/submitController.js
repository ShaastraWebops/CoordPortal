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
  $scope.uploading = false;
  $scope.errormsg = null;
  $scope.successmsg = null;
$scope.submitApp = function() {
  $scope.errormsg = null;
  $scope.successmsg = null; 
  $scope.uploading = true;
  if (!$scope.file || !$scope.department || !$scope.position || !$scope.user.name || !$scope.user.email || !$scope.user.roll) {
    $scope.errormsg = "All fields are necessary.";
    $scope.uploading = false;
    return;
  }
  $scope.user.department = $scope.department;
  $scope.user.position = $scope.position.name;
  User.upload($scope.file).then(function(data){
    if (data.data.success) {
      $scope.user.app = data.data.url;
      User.addUser($scope.user).then(function(res) {
        if (res.data.success) {
          $scope.user = null;
          $scope.file = null;
          $scope.department = null;
          $scope.position = null;
          $scope.successmsg = "Submitted!";
          $scope.errormsg = null;
          $scope.uploading = false;
        } else {
          $scope.errormsg = res.data;
          $scope.successmsg = null;
          $scope.uploading = false;
        }
      });
    } else {
      $scope.errormsg = data.data.message;
      $scope.successmsg = null;
      $scope.uploading = false;
    }
  });
};
});
