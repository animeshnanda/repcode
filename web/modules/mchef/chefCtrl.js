'use strict';
define([
	'angular',
	'angularRoute',
	'jquery',
	'commonService',
	'commonDirective',
	'locationpicker'
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
		var chefReviewData = reviewService.getChefReview().then(function(data){
			$scope.chefreviewdata = data.data;
		});		
		$scope.showModal = false;
		$scope.toggleModal = function(){
			$scope.showModal = !$scope.showModal;
		};
		$(document).ready(function() {
			var x = document.getElementById("demo");
			var lat,lng;
			function getLocation() {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(showPosition);
				} else { 
					x.innerHTML = "Geolocation is not supported by this browser.";
				}
			}
			function showPosition(position) {
				lat = position.coords.latitude;
				lng = position.coords.longitude;
				$('#us3').locationpicker({
					location: {latitude: lat, longitude: lng},	
					radius: 200,
					inputBinding: {
						locationNameInput: $('#us3-address')        
					},
					enableAutocomplete: true,
					onchanged: function(currentLocation, radius, isMarkerDropped) {
						alert("Location changed. New location (" + currentLocation.latitude + ", " + currentLocation.longitude + ")");
					}
				});
			}
			getLocation();
		});
	}])
});

