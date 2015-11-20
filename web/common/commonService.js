'use strict';
define([
	'angular'
], function(angular) {
	angular.module('commonService', [])
	.service('lunchcomboService', function($http,$q) {
		this.getLunchCombos = function() {
			var strData;
			var promise=$http.get("http://localhost:9000/data/lunch-combo.json")
			.success(function (data) {
				strData = data;
			});
			return promise;
		};
	})
	.service('dinnercomboService', function($http,$q) {
		this.getDinnerCombos = function() {
			var strData;
			var promise=$http.get("http://localhost:9000/data/dinner-combo.json")
			.success(function (data) {
				strData = data;
			});
			return promise;
		};
	})
});