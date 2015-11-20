'use strict';
define([
	'angular',
	'angularRoute',
	'jquery'
], function(angular) {
	angular.module('myApp.support', ['ngRoute'])
	
	.config(['$routeProvider', function($routeProvider) {

			$routeProvider.when('/support', {
					templateUrl: '/modules/msupport/support.html',
					controller: 'supportCtrl'
			});
	}])

	.controller('supportCtrl', ['$scope','$http','$rootScope','$document',function($scope,$http,$rootScope,$document) {
		$scope.hello = "hello support";
	}])
});

