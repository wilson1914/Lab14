var app = angular.module('catDogMod', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/cat', {
			controller:'simpleCtrl',
			templateUrl:'cat.html'
		})
		.when('/dog', {
			controller:'simpleCtrl',
			templateUrl:'dog.html'

	});
});

app.controller('simpleCtrl', function() {
});