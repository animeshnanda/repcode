require.config({
	paths: {
		'config' : '../js/config',
		'jquery' : '../components/lib/jquery/jquery',		
		'angular' : '../components/lib/angular/angular',
		'angularRoute': '../components/lib/angular-route/angular-route',
		'highCharts': '../components/lib/highcharts/highcharts',
		'nghighCharts': '../components/lib/highcharts/highcharts-ng',
		'commonService':'/common/commonService',
		'commonDirective':'/common/commonDirective',
		'data': '../components/lib/highcharts/data',
		'exporting': '../components/lib/highcharts/exporting',
		'jqSparkline': '../components/lib/jquery-sparkline/jquery.sparkline',
		'angularCookies': '../components/lib/angular-cookies/angular-cookies',
		'bootstrap': '../components/lib/bootstrap/bootstrap.min',
		'encBase64':'../components/lib/crypto/enc-base64-min',
		'hmacsha256':'../components/lib/crypto/hmac-sha256',
		'slideme': '../components/lib/slideme/jquery.slideme2',
		'jssor' : '../components/lib/jssor/jssor.slider.mini',
		'placepicker' : '../components/lib/placepicker/jquery.placepicker',
		'locationpicker' : '../components/lib/placepicker/locationpicker.jquery'
	},
	shim: {
		angularRoute: {
			deps: ['angular'],
			exports: 'angular'
		},
		highCharts: {
			deps: ['angular'],
			exports: 'angular'
		},
		nghighCharts: {
			deps: ['jquery','angular','highCharts']
		},
		angular: {
			exports : 'angular'
		},
		exporting: {
			deps: ['angular','highCharts','data'],
			exports: 'angular'
		},
		data: {
			deps: ['angular','highCharts'],
			exports: 'angular'
		},
		jqSparkline: {
			deps: ['jquery']
		},
		angularCookies: {
			deps: ['angular']
		},
		bootstrap: {
			deps: ['jquery']
		},
		slideme: {
			deps: ['jquery']
		},
		jssor: {
			deps: ['jquery']
		},
		locationpicker: {
			deps: ['jquery']
		},
		placepicker: {
			deps: ['jquery','bootstrap']
		}
	},
	//baseUrl: '/js',
	waitSeconds: 1
});


require([
	'angular',
	'bootstrap',
	'app'
	], function(angular, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['myApp']);
		});
	}
);