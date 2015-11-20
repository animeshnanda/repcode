'use strict';
define([
	'angular',
	'angularRoute',
	'jquery'
], function(angular) {
	angular.module('myApp.bulk', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/bulk', {
                templateUrl: '/modules/mbulk/bulk.html',
                controller: 'bulkCtrl'
            });
	}])
	.controller('bulkCtrl', ['$scope',function($scope) {
	

		$scope.hello = "BULK";
		

		
    }]);
});

