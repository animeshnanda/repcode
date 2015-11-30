'use strict';
define([
	'angular'
], function(angular) {
		angular.module('commonDirective', [])
		.directive('chartElement', function() {
			var directive = {};
			directive.restrict = 'AE';
			directive.link = function($scope, element, attributes) {
				element.html("<div id='container' style='min-width: 310px; height: 400px; margin: 0 auto'></div>");
			}
			return directive;
		})
		.directive('sparklineElement', function() {
			var directive = {};
			directive.restrict = 'AE';
			directive.link = function($scope, element, attributes) {
				element.html("<div id='sparkcontainer' style='height: 40px; width: 200px;'></div>");

			}
			return directive;
		})		
		.directive('counter', ['$rootScope', function($rootScope) {
			return {
				restrict: 'A',
				scope: { value: '=value' },
				template: '<a href="javascript:;" class="counter-minus" ng-click="minus()">-</a>\
						  <input type="text" class="counter-field" ng-model="value" ng-change="changed()" ng-readonly="readonly">\
						  <a  href="javascript:;" class="counter-plus" ng-click="plus()">+</a>',
				link: function( scope , element , attributes, ctrl ) {
					if ( angular.isUndefined(scope.value) ) {
						throw "Missing the value attribute on the counter directive.";
					}
					var min = angular.isUndefined(attributes.min) ? null : parseInt(attributes.min);
					var max = angular.isUndefined(attributes.max) ? null : parseInt(attributes.max);
					var step = angular.isUndefined(attributes.step) ? 1 : parseInt(attributes.step);
					element.addClass('counter-container');
					scope.readonly = angular.isUndefined(attributes.editable) ? true : false;
					var setValue = function( val ) {
						scope.value = parseInt( val );
					}
					setValue( scope.value );
					scope.minus = function() {
						if ( min && (scope.value <= min || scope.value - step <= min) || min === 0 && scope.value < 1 ) {
							setValue( min );
							return false;
						}
						setValue( scope.value - step );
						$rootScope.checktotal = $rootScope.checktotal - step;
						console.log($rootScope.checktotal);
					};
					scope.plus = function() {
						if ( max && (scope.value >= max || scope.value + step >= max) ) {
							setValue( max );
							return false;
						}
						setValue( scope.value + step );
						$rootScope.checktotal = $rootScope.checktotal + step;
						console.log($rootScope.checktotal);
						//scope.totalitem = $rootScope.checktotal;
					};
					scope.changed = function() {
						if ( !scope.value ) setValue( 0 );
						if ( /[0-9]/.test(scope.value) ) {
							setValue( scope.value );
						}else {
							setValue( scope.min );
						}
						if ( min && (scope.value <= min || scope.value - step <= min) ) {
							setValue( min );
							return false;
						}
						if ( max && (scope.value >= max || scope.value + step >= max) ) {
							setValue( max );
							return false;
						}
						setValue( scope.value );
					};
				}
			}
		}]);
		
		
});