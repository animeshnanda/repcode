'use strict';
define([
	'angular',
	'angularRoute',
	'jquery',
	'commonService',
	'commonDirective'
], function(angular) {
	angular.module('myApp.chef', ['ngRoute','commonService','commonDirective'])
	
	.config(['$routeProvider', function($routeProvider) {

			$routeProvider.when('/chef', {
					templateUrl: '/modules/mchef/chef.html',
					controller: 'chefCtrl'
			});
	}])

	.controller('chefCtrl', ['$scope','$http','$rootScope','$document','location',function($scope,$http,$rootScope,$document,location) {
		location.get(angular.noop, angular.noop);
		$scope.isModalVisible = false;

		$scope.toggleModal = function() {
		  $scope.isModalVisible = !$scope.isModalVisible;
		};

		$scope.$watch('pickedLocation', $scope.toggleModal);
		$scope.$watch('lookedUpLocation', $scope.toggleModal);
		}])
});

