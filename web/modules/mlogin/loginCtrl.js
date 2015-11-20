'use strict';
define([
	'angular',
	'angularRoute',
	'jquery',
	'angularCookies',
	'bootstrap'
], function(angular) {
    angular.module('myApp.login', ['ngRoute','ngCookies'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/login', {
            templateUrl: '/modules/mlogin/login.html',
            controller: 'loginCtrl'
        });
    }])
    .run(["$rootScope","$document",function($rootScope,$document) {
        var d = new Date();
        var n = d.getTime();
        console.log(n);
        $rootScope.idleEndTime = n+(50*60*1000); 
        $document.find('body').on('mousemove keydown DOMMouseScroll mousewheel mousedown touchstart', checkAndResetIdle); 
        function checkAndResetIdle(){
            var d = new Date();
            var n = d.getTime();
            if (n>$rootScope.idleEndTime){
                $document.find('body').off('mousemove keydown DOMMouseScroll mousewheel mousedown touchstart');
                alert('Session ended due to inactivity');
                document.location.href = '/#/';
            } else {
                $rootScope.idleEndTime = n+(50*60*1000);
            }
        } 
    }]) 
    .controller('loginCtrl', ['$scope','$cookies','$rootScope','$document','$http','loginService',function($scope,$cookies,$rootScope,$document,$http,loginService) {

        $scope.hello = "hello Login";
        //var token = $cookies.get("authToken");
        //console.log(token);
        $scope.submitData = function() {
                var logindata=$scope.form;  
                var returnData;
                var dataSrv = loginService.flogin(logindata).then(function(response){
                    returnData = response.data.success;
                    $scope.token = response.data;
                    if(response.data.success === 1){
                        $cookies.put("username", response.data.username);
                        $cookies.put("authToken", response.data.token);
                        console.log(response.data.status);
                    }else{
                        console.log(response.data.status);
                        alert(response.data.status);
                    }
                });
        };
        $scope.clearData = function(msg) {
                $scope.form.uname = "";
                $scope.form.pwd = "";
        };
    }])
    .service('loginService',['$http',function($http){
        this.flogin = function(dt){
            var responseData = $http.post("http://localhost:8080/login",{username:dt.uname,password:dt.pwd})
            .success(function(data, status, headers, config){
                    console.log(data.success);return data.success;});
            return responseData;
        };
    }]);
});

