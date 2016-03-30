var app = angular.module('waitstaff-calc',['ngRoute'])
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
	.controller('HomeCtrl', function($scope) {
        //empty for now
    })
    .controller('MealCtrl', function($rootScope, $scope) {
    	$rootScope.waiter = new Waiter();
    	$rootScope.meal = new Meal();
		$rootScope.onSubmit = function(e) {
        	$scope.waiter.addTip($scope.meal.tip());
        	$scope.meal = new Meal();
    	};
        $scope.cancelSubmit=function(){
     		$scope.meal = new Meal();
		};
    })
    .controller('EarningsCtrl', function($scope, $rootScope) {
    	if(!$rootScope.waiter){
    		$rootScope.waiter = new Waiter();
    	}
        $scope.onReset = function(e) {
        	$scope.meal = new Meal();
        	$scope.waiter = new Waiter();
    	};
    });