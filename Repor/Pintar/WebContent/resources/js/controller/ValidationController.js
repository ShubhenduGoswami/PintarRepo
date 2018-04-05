/**
 * 
 */

app.controller("ValidationController", function($scope, $http, ValidationService) {
	
	$scope.nameValidated = false;
	$scope.userNameValidated = false;
	$scope.phoneValidated = false;
	$scope.emailValidated = false;
	$scope.passwordValidated = false;
	$scope.rPasswordValidated = false;
	
	$scope.validateName = function(name) {
		$scope.nameValidated = !ValidationService.validateName(name);
	};
	
	$scope.validateUserName = function(username) {
		$scope.userNameValidated = !ValidationService.validateUserName(username);
	};
	
	$scope.validatePhone = function(phone) {
		$scope.phoneValidated = !ValidationService.validatePhone(phone);
	};
	
	$scope.validateEmail = function(email) {
		$scope.emailValidated = !ValidationService.validateEmail(email);
	};
	
	$scope.validatePassword = function(password) {
		$scope.passwordValidated = !ValidationService.validatePassword(password);
	};
	
	$scope.validaterPassword = function(rPassword, password) {
		$scope.rPasswordValidated = !ValidationService.validaterPassword(rPassword, password);
	};
});