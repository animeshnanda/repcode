'use strict';
define([
	'angular',
	'angularRoute',
	'jquery'
], function(angular) {
	angular.module('myApp.account', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/account', {
                templateUrl: '/modules/maccount/account.html',
                controller: 'accountCtrl'
            });
	}])
	.controller('accountCtrl', ['$scope',function($scope) {
	

		$scope.hello = "ACCOUNT";
		

		
    }]);
});

