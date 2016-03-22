var app = angular.module('waitstaff-calc',[])
	.controller('waitstaffCtrl', function($scope){
		$scope.mealDetail = {};
		$scope.submitForm = function(){
			$scope.mealDetail.base = $scope.mealPrice;
			$scope.mealDetail.tax = ($scope.taxRate/100);
			$scope.mealDetail.tipPer = ($scope.tipPer/100);
			$scope.taxTotal();
			$scope.mealPrice = ''; 
			$scope.taxRate = '';
			$scope.tipPer = '';
		};
	

	$scope.taxTotal = function(){
		var total=($scope.mealDetail.base * $scope.mealDetail.tax) + $scope.mealDetail.base;
		$scope.totalAfterTax(total);
	};

	$scope.totalAfterTax=function(total){
		$scope.tip  = total * $scope.mealDetail.tipPer;
		$scope.total = $scope.tip + total;
		$scope.tipTotal += $scope.tip;
	};
});