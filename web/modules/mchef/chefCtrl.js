'use strict';
define([
	'angular',
	'angularRoute',
	'jquery',
	'commonService',
	'commonDirective',
	'placepicker'
], function(angular) {
	angular.module('myApp.chef', ['ngRoute','commonService','commonDirective'])
	
	.config(['$routeProvider', function($routeProvider) {

			$routeProvider.when('/chef', {
					templateUrl: '/modules/mchef/chef.html',
					controller: 'chefCtrl'
			});
	}])

	.controller('chefCtrl', ['$scope','$http','$rootScope','$document','location','cheflistService','reviewService',function($scope,$http,$rootScope,$document,location,cheflistService,reviewService) {
		var chefData = cheflistService.getChefList().then(function(data){
			$scope.cheflistdata = data.data;
		});
		/*location.get(angular.noop, angular.noop);
		$scope.isModalVisible = false;

		$scope.toggleModal = function() {
		  $scope.isModalVisible = !$scope.isModalVisible;
		};

		$scope.$watch('pickedLocation', $scope.toggleModal);
		$scope.$watch('lookedUpLocation', $scope.toggleModal);*/
		
		var chefReviewData = reviewService.getChefReview().then(function(data){
			$scope.chefreviewdata = data.data;
		});		
		$scope.showModal = false;
		$scope.toggleModal = function(){
			$scope.showModal = !$scope.showModal;
		};
		
		$(document).ready(function() {
        
			// Basic usage
			$("#placepicker").placepicker();
              
		});
		
	}])
});

