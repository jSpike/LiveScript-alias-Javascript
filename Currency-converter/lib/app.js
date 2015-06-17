angular.module('ConvrtX', [])
.controller('CnvrtCtrl', ['$scope','$http', function ($scope,$http) {
 $scope.rates= {};
 $http.get('http://api.fixer.io/latest?base=ZAR').success(function(result) {
    $scope.rates= result.rates;
	$scope.fromType = $scope.rates.USD;
	$scope.toType= $scope.rates.INR;
	$scope.fromValue = 1;
	$scope.convert();
 });
 $scope.convert = function(){
  $scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
  $scope.toValue = $scope.toValue;
 };
}]);
