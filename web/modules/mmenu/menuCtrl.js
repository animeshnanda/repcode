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
	.run(['$rootScope',function($rootScope) {
			$rootScope.checktotal = 0; 
	}]) 
	.controller('menuCtrl', ['$scope','lunchcomboService','dinnercomboService','$rootScope',function($scope,lunchcomboService,dinnercomboService,$rootScope) {
		var lunchData = lunchcomboService.getLunchCombos().then(function(data){
			$scope.lcombos = data.data;
			//console.log($scope.lcombos);
		});
		var dinnerData = dinnercomboService.getDinnerCombos().then(function(data){
			$scope.dcombos = data.data;
			//console.log($scope.dcombos);
		});
		$scope.quantity = 0;
		$scope.totalitem = $rootScope.checktotal;
    }]);
});

