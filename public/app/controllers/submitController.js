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
$scope.Submit = function() {
  User.upload($scope.file).then(function(data){});
};
});
