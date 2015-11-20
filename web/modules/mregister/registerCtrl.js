'use strict';
define([
	'angular',
	'angularRoute',
	'jquery'
], function(angular) {
	angular.module('myApp.register', ['ngRoute'])
	
	.config(['$routeProvider', function($routeProvider) {

			$routeProvider.when('/register', {
					templateUrl: '/modules/mregister/register.html',
					controller: 'registerCtrl'
			});
	}])

	.controller('registerCtrl', ['$scope','$http','$rootScope','$document',function($scope,$http,$rootScope,$document) {
		$scope.hello = "hello register";
	}])
});

