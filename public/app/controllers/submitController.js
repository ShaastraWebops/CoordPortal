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
.controller('submitCtrl',function(User,$scope,$rootScope,$window,$http,DEPARTMENTS,APPS,EVENTS){
  this.depts = DEPARTMENTS;
  this.app = APPS;
  this.event = EVENTS;
  // $scope.department = $rootScope.globaldept;
  // $scope.posn = $rootScope.globalpos;
  // console.log($rootScope.globaldept);
  $scope.uploading = false;
  $scope.errormsg = null;
  $scope.successmsg = null;
  this.department = '';
	this.position = '';
  this.vertical = '';
  $scope.ssb = false;
  $scope.user={};
  $scope.$watch('file.upload', function (newVal) {
     if (newVal) {
       $scope.ssb = true;
     }
   })
  //  $scope.testfn = function(isConfirm) {
  //    swal({
  //      type: 'error',
  //      title: 'Oops...',
  //      text: 'All fields are necessary.'
  //    })
   //
  //     }

  $scope.submitApp = function() {
    $scope.user.department = $scope.department;
    $scope.user.position = $scope.position.name;
    if($scope.department == 'Events')
    {
      $scope.user.position = $scope.position;
      $scope.user.vertical = $scope.vertical.name;
    }
    console.log($scope.user);
    if (!$scope.file || !$scope.department || !$scope.position || !$scope.user.name || !$scope.user.email || !$scope.user.roll) {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'All fields are necessary.'
      })
      $scope.errormsg = "All fields are necessary.";
      $scope.uploading = false;
      return;
    }
    swal({
       title: 'Uploading your application...'
     });
     swal.showLoading();
    $scope.errormsg = null;
    $scope.successmsg = null;
    $scope.uploading = true;


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
            swal("Successfully submitted","", "success").then(()=>{
              $window.location.reload();
            });
          } else {
            swal({
              type: 'error',
              title: 'Oops...',
              text: 'Something went wrong!'
            })
            $scope.errormsg = res.data;
            $scope.successmsg = null;
            $scope.uploading = false;
          }
        });
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
        $scope.errormsg = data.data.message;
        $scope.successmsg = null;
        $scope.uploading = false;
      }
    });
};
});
