/**
 * 
 */

app.controller("ValidationController", function($scope, $http, ValidationService) {
	
	$scope.validateName = function(name) {
		ValidationService.validateName(name);
	};
	
	$scope.validateUserName = function() {
		ValidationService.validateuserName($scope.userName);
	};
	
	$scope.validatePhone = function() {
		ValidationService.validatePhone($scope.phone)
	}
	
	
});