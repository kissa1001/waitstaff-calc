var app = angular.module('waitstaff-calc',[])
	.controller('waitstaffCtrl', function($scope){
		$scope.mealDetail = {};

		$scope.tipTotal=0;
		$scope.mealCount =0;
		$scope.submitForm = function(){
			$scope.mealDetail.base = $scope.mealPrice;
			$scope.mealDetail.tax = ($scope.taxRate/100);
			$scope.mealDetail.tipPer = ($scope.tipPer/100);
			$scope.total=($scope.mealDetail.base * $scope.mealDetail.tax) + $scope.mealDetail.base;
			$scope.tip  = $scope.total * $scope.mealDetail.tipPer;
			$scope.subTotal = $scope.tip + $scope.total;
			$scope.tipTotal += $scope.tip;
			$scope.mealCount = $scope.mealCount++;
			$scope.avg=$scope.tipTotal/$scope.mealCount;
			$scope.mealPrice = ''; 
			$scope.taxRate = '';
			$scope.tipPer = '';
		};

		$scope.cancelSubmit=function(){
     		$scope.mealPrice=null;
     		$scope.taxRate=null;
     		$scope.tipPercent=null;
		}
});