var app = angular.module('waitstaff-calc',['ngRoute','ngAnimate'])
.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './home.html',
    controller: 'HomeCtrl'
  })
  .when('/new-meal', {
    templateUrl:'./new-meal.html',
    controller: 'MealCtrl'
  })
  .when('/my-earnings', {
    templateUrl:'./my-earnings.html',
    controller: 'EarningsCtrl'
  })
  .when('/error', {
    template : '<p>Error Page Not Found</p>'
  });
})
.factory('waiter', function(){
  return new Waiter();
})
.controller('HomeCtrl', function($scope) {
  //empty for now
})
.controller('MealCtrl', ['$scope', 'waiter', function($scope, waiter) {
  $scope.meal = new Meal();
  $scope.onSubmit = function(e) {
    waiter.addTip($scope.meal.tip());
    $scope.meal = new Meal();
  };
  $scope.cancelSubmit=function(){
    $scope.meal = new Meal();
  };
}])
.controller('EarningsCtrl', ['$scope', 'waiter', function($scope, waiter) {
  $scope.waiter = waiter;
  $scope.onReset = function(e) {
    waiter.reset();
  };
}])
.run(function($rootScope, $location, $timeout) {
  $rootScope.$on('$routeChangeError', function() {
    $location.path("/error");
  });
  $rootScope.$on('$routeChangeStart', function() {
    $rootScope.isLoading = true;
  });
  $rootScope.$on('$routeChangeSuccess', function() {
    $timeout(function() {
      $rootScope.isLoading = false;
    }, 1000);
  });
});