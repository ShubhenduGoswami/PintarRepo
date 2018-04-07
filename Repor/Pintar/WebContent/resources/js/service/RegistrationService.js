/**
 * 
 */

app.service("RegistrationService", function($http) {
	
	this.registerServiceURL = "https://letuspaint--developer--edition-ap5-force-com-u8z5cgpq3zn6.runscope.net/services/apexrest/Register/";
	this.register = function(userData) {
		
		$http.post(this.registerServiceURL,userData)
			.then(function(response) {
				console.log(response.data);
			}, function(responseError) {
				console.log(responseError.data);
			});
	};
	
});