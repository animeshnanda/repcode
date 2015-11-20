'use strict';
define([
	'angular',
	'angularRoute',
	'jquery',
	'commonService',
	'commonDirective'
], function(angular) {
	angular.module('myApp.menu', ['ngRoute','commonService','commonDirective'])
	.config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/menu', {
                templateUrl: '/modules/mhome/menu.html',
                controller: 'menuCtrl'
            });
	}])

	.controller('menuCtrl', ['$scope','lunchcomboService','dinnercomboService',function($scope,lunchcomboService,dinnercomboService) {
		var lunchData = lunchcomboService.getLunchCombos().then(function(data){
			$scope.lcombos = data.data;
			//console.log($scope.lcombos);
		});
		var dinnerData = dinnercomboService.getDinnerCombos().then(function(data){
			$scope.dcombos = data.data;
			//console.log($scope.dcombos);
		});
		$scope.quantity = 0;
    }]);
});

