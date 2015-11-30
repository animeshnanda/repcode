
define([
	'angular',
	'commonService',
	'angularRoute',
	'../modules/mhome/homeCtrl',
	'../modules/mchef/chefCtrl',
	'../modules/mlogin/loginCtrl',
	'../modules/mregister/registerCtrl',
	'../modules/mmenu/menuCtrl',
	'../modules/mbulk/bulkCtrl',
	'../modules/mabout/aboutCtrl',
	'../modules/mchefreg/chefregCtrl',
	'../modules/maccount/accountCtrl',
	'../modules/msupport/supportCtrl'
], function(angular, angularRoute, chart, commonService) {
	// Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ngRoute',
		'myApp.home',
		'myApp.chef',
		'myApp.login',
		'myApp.register',
		'myApp.menu',
		'myApp.bulk',
		'myApp.about',
		'myApp.chefreg',
		'myApp.account',
		'myApp.support',
		'commonService'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.              
				when('/login', {
                    templateUrl: '/modules/mlogin/login.html',
                    controller: 'loginCtrl'
                }).	
				when('/home', {
                    templateUrl: '/modules/mhome/home.html',
                    controller: 'homeCtrl'
                }).	
				when('/menu', {
                    templateUrl: '/modules/mmenu/menu.html',
                    controller: 'menuCtrl'
                }).					
				when('/register', {
                    templateUrl: '/modules/mregister/register.html',
                    controller: 'registerCtrl'
                }).
				when('/support', {
                    templateUrl: '/modules/msupport/support.html',
                    controller: 'supportCtrl'
                }).		
				when('/bulk', {
                    templateUrl: '/modules/mbulk/bulk.html',
                    controller: 'bulkCtrl'
                }).	
				when('/chefreg', {
                    templateUrl: '/modules/mchefreg/chefreg.html',
                    controller: 'chefregCtrl'
                }).	
				when('/about', {
                    templateUrl: '/modules/mabout/about.html',
                    controller: 'aboutCtrl'
                }).	
				when('/account', {
                    templateUrl: '/modules/maccount/account.html',
                    controller: 'accountCtrl'
                }).					
                otherwise({
                    redirectTo: '/',
					templateUrl: '/modules/mchef/chef.html',
					controller: 'chefCtrl'
                });
	}])
    .controller('mainPageCtrl', ['$scope', '$http', 'rootVariables', '$routeParams', function($scope, $http, rootVariables, $routeParams) {
            //$scope.app = {};
			console.log("abcd");
    }]);
});