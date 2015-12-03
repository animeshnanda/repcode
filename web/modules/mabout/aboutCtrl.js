'use strict';
define([
	'angular',
	'angularRoute',
	'jquery'
], function(angular) {
	angular.module('myApp.about', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/about', {
                templateUrl: '/modules/mabout/about.html',
                controller: 'aboutCtrl'
            });
	}])
	.controller('aboutCtrl', ['$scope',function($scope) {

    }]);
});

