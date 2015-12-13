'use strict';
define([
	'angular',
	'config'
], function(angular) {
	angular.module('commonService', [])
	.service('loginService',['$http',function($http){
        this.flogin = function(dt){
            var responseData = $http.post(sysip+"/login",{mob:dt.mob,password:dt.pwd})
            .success(function(data, status, headers, config){
                    console.log(data.success);return data.success;});
            return responseData;
        };
    }])
	.service('cheflistService', function($http,$q) {
		this.getChefList = function() {
			var strData;
			var promise=$http.get(sysip+"/data/chef-list.json")
			.success(function (data) {
				strData = data;
			});
			return promise;
		};
	})
	.service('lunchcomboService', function($http,$q) {
		this.getLunchCombos = function() {
			var strData;
			var promise=$http.get(sysip+"/data/lunch-combo.json")
			.success(function (data) {
				strData = data;
			});
			return promise;
		};
	})
	.service('dinnercomboService', function($http,$q) {
		this.getDinnerCombos = function() {
			var strData;
			var promise=$http.get(sysip+"/data/dinner-combo.json")
			.success(function (data) {
				strData = data;
			});
			return promise;
		};
	})
	.service('userinfoService', function($http,$q) {
		this.getUserInfo = function() {
			var strData;
			var promise=$http.get(sysip+"/data/user-info.json")
			.success(function (data) {
				strData = data;
			});
			return promise;
		};
	})
	.service('reviewService', function($http,$q) {
		this.getChefReview = function() {
			var strData;
			var promise=$http.get(sysip+"/data/review-data.json")
			.success(function (data) {
				strData = data;
			});
			return promise;
		};
	})
	.factory('location', [function() {
		var service = {
		  isReady: false,
		  gpsAvailable: true
		};
		var readyCallbacks = [];
		// Get Current Location
		service.get = function(s_cb, e_cb) {
		  // Request location from the navigator service
		  navigator.geolocation.getCurrentPosition(function(location) {
			// Geolocation is available
			service.gpsAvailable = true;
			// parse current location
			service.current = {
			  latitude: location.coords.latitude,
			  longitude: location.coords.longitude
			};
			// Location is ready
			service.isReady = true;
			// Execute the on ready tasks
			service.onReadyTasks();
			// success callback
			s_cb();
		  }, function(error) {
			service.gpsAvailable = false;
			console.log('code: ' + error.code + ' message: ' + error.message);
			// error callback
			e_cb();
		  });
		};
		// Execute registered tasks
		service.onReadyTasks = function() {
		  for (var i = readyCallbacks.length - 1; i >= 0; i--) {
			readyCallbacks[i]();
		  };
		};
		// Execute registered tasks if ready
		// or register tasks if not ready yet
		service.ready = function(callback) {
		  if (service.isReady) {
			callback();
		  } else {
			// If not ready yet, add it to this array
			// which will be called once location is ready
			readyCallbacks.push(callback);
		  }
		};
		return service;
	}])
	
	.factory('reverseGeocoder', ['$document','$q', function($document, $q) {
		var service = {};
		$document.ready(function() {
		  service.geocoder = new google.maps.Geocoder();
		});
		service.geocode = function(location) {
		  var deferred = $q.defer();
		  if (!location) {
			deferred.reject('You need to provide LatLng');
		  } else {
			var latlng = new google.maps.LatLng(location.latitude, location.longitude);
		  }
		  // geocode
		  service.geocoder.geocode({
			latLng: latlng
		  }, function(results, status) {
			if (status !== google.maps.GeocoderStatus.OK) {
			  deferred.reject('No locations found');
			  return;
			} else {
			  deferred.resolve(results);
			}
		  });
		  return deferred.promise;
		};
		return service;
	}])
});