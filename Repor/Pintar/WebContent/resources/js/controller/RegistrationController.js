/**
 * 
 */

app.controller("RegistrationController", function($scope, RegistrationService, ValidationService) {
	
	$scope.validation = {};
	
	$scope.validation.nameValidated = false;
	$scope.validation.userNameValidated = false;
	$scope.validation.phoneValidated = false;
	$scope.validation.emailValidated = false;
	$scope.validation.passwordValidated = false;
	$scope.validation.rPasswordValidated = false;
	
	$scope.validateName = function(name) {
		$scope.validation.nameValidated = !ValidationService.validateName(name);
	};
	
	$scope.validateUserName = function(username) {
		$scope.validation.userNameValidated = !ValidationService.validateUserName(username);
	};
	
	$scope.validatePhone = function(phone) {
		$scope.validation.phoneValidated = !ValidationService.validatePhone(phone);
	};
	
	$scope.validateEmail = function(email) {
		$scope.validation.emailValidated = !ValidationService.validateEmail(email);
	};
	
	$scope.validatePassword = function(password) {
		$scope.validation.passwordValidated = !ValidationService.validatePassword(password);
	};
	
	$scope.validaterPassword = function(rPassword, password) {
		$scope.validation.rPasswordValidated = !ValidationService.validaterPassword(rPassword, password);
	};
	
	
	$scope.register = function(){
		
		alert(JSON.stringify($scope.userDetails));
		
		/*delete $scope.userDetails.rPassword;
		$scope.userDetails.userType="Painter";
		RegistrationService.register($scope.userDetails);*/
	}
	
});