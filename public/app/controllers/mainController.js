angular.module('mainController',['userServices','ngMaterial'])
.controller('mainCtrl',function(User,$scope,$rootScope,$window,$http,DEPARTMENTS,APPS){
  var app=this;
this.display = false;
	this.depts = DEPARTMENTS;
	this.app = APPS;
	this.path = 'http://res.cloudinary.com/shaastra-apps/image/upload/';
	this.posts = [];
	$scope.display = false;
	this.initValue = "--Select Department--";
	var department, position;
	this.department = '';
	this.position = '';
	this.showPDF = function(){
		var app_name = '';
		var j=0;
		for (var i=0; i<$scope.position.app_name.length; i++) {
			if ($scope.position.app_name[i] === ' ') {
				if (j>0) {
					if (app_name[j-1] === '_') {
						continue;
					}
				}
				app_name = app_name + '_';
				j++;
			} else if ($scope.position.app_name[i] === '(' || $scope.position.app_name[i] === ')') {
				continue;
			} else {
				app_name = app_name + $scope.position.app_name[i];
				j++;
			}
		}
		if (app_name[app_name.length-1] === '_') {
			app_name = app_name.slice(0,-1);
		}
		$window.open(this.path + app_name +'.pdf', '_blank');
	};
  // this.test = function() {
  //   console.log($scope.position.name);
  //   $rootScope.globaldept = $scope.department;
  //   console.log($rootScope.globaldept);
  // }
	this.openSubmit = function()
	{
    // $rootScope.globaldept = $scope.department;
    // $rootScope.globalpos = $scope.position;
		$window.open('/submit','_self');
	}


});
