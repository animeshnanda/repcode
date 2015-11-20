'use strict';
define([
	'angular',
	'angularRoute',
	'jquery'
], function(angular) {
	angular.module('myApp.chefreg', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/chefreg', {
                templateUrl: '/modules/mchefreg/chefreg.html',
                controller: 'chefregCtrl'
            });
	}])
	.controller('chefregCtrl', ['$scope',function($scope) {
	

		$scope.hello = "CHEF REGISTER";
		

		
    }]);
});

