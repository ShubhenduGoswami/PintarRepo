/**
 * 
 */

var app = angular.module("PaintApp",[]);

/*app.controller('UserRegistrationController',function($scope,$http){
	
	appURL = {};
	appURL.registration = "https://letuspaint--developer--edition-ap5-force-com-u8z5cgpq3zn6.runscope.net/services/apexrest/UserDetails/";
	$scope.userDetails = {};
	userObject = {};
	$scope.register = function() {
		userObject.det = $scope.userDetails;
		
		$http.post(appURL.registration,JSON.stringify(userObject),{headers : {'Access-Control-Allow-Origin':'*'}})
		.then(function(response) {
			console.log(JSON.stringify(response.data));
		});
	}
});*/