var app = angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider,$locationProvider){
  $routeProvider.when('/',{
    templateUrl: 'app/views/pages/main.html',
    controller: 'mainCtrl',
    controllerAs: 'Ctrl'
  })
  .otherwise({redirectTo:'/'});

  $locationProvider.html5Mode({
    enabled:true,
    requireBase: false
  });
});
