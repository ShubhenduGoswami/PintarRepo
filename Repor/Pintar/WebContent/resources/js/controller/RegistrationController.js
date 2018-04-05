/**
 * 
 */

app.controller("RegistrationController", function($scope, RegistrationService) {
	
	$scope.register = function(details){
		alert(JSON.stringify(details));
		//RegistrationService.register();
	}
	
});