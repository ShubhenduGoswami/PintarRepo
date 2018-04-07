/**
 * 
 */

app.controller("RegistrationController", function($scope, RegistrationService, ValidationService, AnimationService) {
	
	$scope.validation = {};
	$scope.userDetails = {};
	
	$scope.validation.nameValidated = null;
	$scope.validation.userNameValidated = null;
	$scope.validation.phoneValidated = null;
	$scope.validation.emailValidated = null;
	$scope.validation.passwordValidated = null;
	$scope.validation.rPasswordValidated = null;
	$scope.validation.registerDisable = true;
	
	$scope.validate = function() {
		
		 $scope.validation.registerDisable = $scope.validation.nameValidated 
										 || $scope.validation.userNameValidated
										 || $scope.validation.phoneValidated
										 || $scope.validation.emailValidated
										 || $scope.validation.passwordValidated
										 || $scope.validation.rPasswordValidated;
		 for (var key in $scope.validation) {
			 if($scope.validation.hasOwnProperty(key)) {
				if($scope.validation[key] == null) {
					$scope.validation.registerDisable = true;
					break;
				}		
			 }
		 }
		 console.log(JSON.stringify($scope.validation));
	};
	
	$scope.validateName = function(name) {
		$scope.validation.nameValidated = !ValidationService.validateName(name);
		$scope.validate();
	};
	
	$scope.validateUserName = function(username) {
		$scope.validation.userNameValidated = !ValidationService.validateUserName(username);
	
		$scope.validate();
	};
	
	$scope.validatePhone = function(phone) {
		$scope.validation.phoneValidated = !ValidationService.validatePhone(phone);
	
		$scope.validate();
	};
	
	$scope.validateEmail = function(email) {
		$scope.validation.emailValidated = !ValidationService.validateEmail(email);
	
		$scope.validate();
	};
	
	$scope.validatePassword = function(password) {
		$scope.validation.passwordValidated = !ValidationService.validatePassword(password);
	
		$scope.validate();
	};
	
	$scope.validaterPassword = function(rPassword, password) {
		$scope.validation.rPasswordValidated = !ValidationService.validaterPassword(rPassword, password);
	
		$scope.validate();
	};

	$scope.setUserTypeArtist = function() {
		$scope.userDetails.userType = "Artist";
		AnimationService.scrollToId("#registrationform");
	};
	
	$scope.setUserTypeRegular = function() {
		$scope.userDetails.userType = "Regular";
		AnimationService.scrollToId("#registrationform");
	};
	
	$scope.register = function(){
		
		delete $scope.userDetails.rPassword;
		RegistrationService.register($scope.userDetails);
	}
	
});