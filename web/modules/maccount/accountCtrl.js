'use strict';
define([
	'angular',
	'angularRoute',
	'jquery',
	'commonService'
], function(angular) {
	angular.module('myApp.account', ['ngRoute','commonService'])
	.config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/account', {
                templateUrl: '/modules/maccount/account.html',
                controller: 'accountCtrl'
            });
	}])
	.controller('accountCtrl', ['$scope','userinfoService',function($scope,userinfoService) {

		var userData = userinfoService.getUserInfo().then(function(data){
			$scope.uinfo = data.data;
			console.log($scope.uinfo);
		});
		
    }]);
});

