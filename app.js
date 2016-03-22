var app = angular.module('waitstaff-calc',[])
	.controller('waitstaffCtrl', function($scope){
		$scope.mealDetail = {};
		$scope.submitForm = function(){
			$scope.mealDetail.base = $scope.mealPrice;
			$scope.mealDetail.tax = ($scope.taxRate/100);
			$scope.mealDetail.tipPer = ($scope.tipPer/100);
			$scope.total=($scope.mealDetail.base * $scope.mealDetail.tax) + $scope.mealDetail.base;
			$scope.tip  = $scope.total * $scope.mealDetail.tipPer;
			$scope.subTotal = $scope.tip + $scope.total;
			$scope.tipTotal += $scope.tip;
			$scope.taxTotal();
			$scope.mealPrice = ''; 
			$scope.taxRate = '';
			$scope.tipPer = '';
		};
});