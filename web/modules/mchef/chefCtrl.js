'use strict';
define([
	'angular',
	'angularRoute',
	'jquery'
], function(angular) {
	angular.module('myApp.chef', ['ngRoute'])
	
	.config(['$routeProvider', function($routeProvider) {

			$routeProvider.when('/chef', {
					templateUrl: '/modules/mchef/chef.html',
					controller: 'chefCtrl'
			});
	}])

	.controller('chefCtrl', ['$scope','$http','$rootScope','$document',function($scope,$http,$rootScope,$document) {
		$scope.hello = "hello chef";
	}])
});

