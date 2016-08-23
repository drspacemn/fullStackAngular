var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider, $locationProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		$locationProvider.html5Mode(true);
})
