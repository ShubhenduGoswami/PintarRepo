/**
 * 
 */

app.service("ValidationService",function() {
	
	this.validateName = function(name) {
		var regex = /^[A-Za-z ]{5,50}$/;
		return regex.test(name);
	};
	
	this.validateUserName = function(username) {
		var regex = /^[A-Za-z0-9_$-&]{6,30}$/;
		return regex.test(username);
	};
	
	this.validatePhone = function(phone) {
		var regex = /^[987]{1}[0-9]{9}$/;
		return regex.test(phone);
	};
	
	this.validateEmail = function(email) {
		var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email);
	};
	
	this.validatePassword = function(password) {
		var regex = /^([a-zA-Z0-9@*#]{8,15})$/;
		return regex.test(password);
	};
	
	this.validaterPassword = function(rPassword, password) {
		return (rPassword==password);
	};
	
});