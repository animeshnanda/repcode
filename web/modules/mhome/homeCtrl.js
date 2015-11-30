'use strict';
define([
	'angular',
	'angularRoute',
	'jquery',
	'slideme'
], function(angular) {
	angular.module('myApp.home', ['ngRoute'])
	
	.config(['$routeProvider', function($routeProvider) {

			$routeProvider.when('/home', {
					templateUrl: '/modules/mhome/home.html',
					controller: 'homeCtrl'
			});
	}])

	.controller('homeCtrl', ['$scope','$http','$rootScope','$document',function($scope,$http,$rootScope,$document) {
		$('#foo').slideme({
			arrows: true,
			pagination: "numbers",
			nativeTouchScroll: true,
			resizable: {
				width: 320,
				height: 250,
			}
		});
	}])
});

