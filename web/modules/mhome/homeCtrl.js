'use strict';
define([
	'angular',
	'angularRoute',
	'jquery',
	'jssor'
], function(angular) {
	angular.module('myApp.home', ['ngRoute'])
	
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: '/modules/mhome/home.html',
			controller: 'homeCtrl'
		});
	}])

	.controller('homeCtrl', ['$scope','$http','$rootScope','$document',function($scope,$http,$rootScope,$document) {
		
		jQuery(document).ready(function ($) {
			
            //Desktop Slider Code Start
            var jssor_1_SlideshowTransitions = [
              {$Duration:1000,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Easing:$Jease$.$OutQuad},
              {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1000,x:-1,y:2,$Rows:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.85}},
              {$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1000,x:4,y:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1500,x:0.3,y:-0.3,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}},
              {$Duration:1000,x:-3,y:1,$Rows:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,y:-1,$Cols:8,$Rows:4,$Clip:15,$During:{$Top:[0.5,0.5],$Clip:[0,0.5]},$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:12},$ScaleClip:0.5},
              {$Duration:1000,x:0.5,y:0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1200,x:-0.6,y:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1500,y:-0.5,$Delay:60,$Cols:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationCircle,$Easing:$Jease$.$InWave,$Round:{$Top:1.5}},
              {$Duration:1000,$Delay:30,$Cols:8,$Rows:4,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:$Jease$.$InQuad},
              {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
            ];
            
            var jssor_1_SlideoTransitions = [
              [{b:-1.0,d:1.0,rY:90.0},{b:8500.0,d:1000.0,o:-1.0,rY:-90.0}],
              [{b:-1.0,d:1.0,o:-1.0},{b:0.0,d:480.0,x:-300.0,o:1.0},{b:1000.0,d:500.0,x:-370.0}],
              [{b:480.0,d:520.0,x:100.0,y:-320.0}],
              [{b:1500.0,d:500.0,y:250.0},{b:8500.0,d:1000.0,x:600.0}],
              [{b:-1.0,d:1.0,o:-1.0,sX:-0.6,sY:-0.6},{b:2000.0,d:500.0,o:1.0,r:360.0,sX:0.6,sY:0.6},{b:8500.0,d:1000.0,y:-150.0}],
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:2500.0,d:1000.0,o:1.0,tZ:200.0},{b:3500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:3500.0,d:1000.0,o:1.0,tZ:200.0},{b:4500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:4500.0,d:1000.0,o:1.0,tZ:200.0},{b:5500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:5500.0,d:1000.0,o:1.0,tZ:200.0},{b:6500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:6500.0,d:1000.0,o:1.0,tZ:200.0},{b:7500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:7500.0,d:1000.0,o:1.0,tZ:200.0},{b:8500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,c:{x:250.0,t:-250.0}},{b:0.0,d:1000.0,c:{x:-250.0,t:250.0}},{b:5000.0,d:1000.0,y:100.0}],
              [{b:-1.0,d:1.0,o:-1.0},{b:1000.0,d:1000.0,o:1.0},{b:5000.0,d:1000.0,y:280.0}],
              [{b:2000.0,d:1000.0,y:190.0,e:{y:28.0}},{b:5000.0,d:1000.0,x:280.0}],
              [{b:3000.0,d:520.0,y:50.0},{b:5000.0,d:1000.0,y:-50.0}],
              [{b:3520.0,d:480.0,x:-400.0},{b:5000.0,d:800.0,x:400.0,e:{x:7.0}}],
              [{b:4000.0,d:500.0,x:-400.0},{b:5000.0,d:800.0,x:400.0,e:{x:7.0}}],
              [{b:4500.0,d:500.0,x:-400.0},{b:5000.0,d:800.0,x:400.0,e:{x:7.0}}],
              [{b:-1.0,d:1.0,o:-0.4},{b:0.0,d:1000.0,y:140.0,o:0.4},{b:23000.0,d:1000.0,y:-140.0}],
              [{b:-1.0,d:1.0,c:{x:275.0,t:-275.0}},{b:1000.0,d:1000.0,c:{x:-275.0,t:275.0}},{b:23000.0,d:1000.0,y:100.0}],
              [{b:-1.0,d:1.0,o:-1.0},{b:2000.0,d:1000.0,o:1.0},{b:23000.0,d:1000.0,o:-1.0}],
              [{b:-1.0,d:1.0,sX:-0.7,sY:-0.7},{b:5000.0,d:1000.0,sX:0.4,sY:0.4,e:{sX:16.0,sY:16.0}},{b:9000.0,d:1000.0,sX:-0.2,sY:-0.2,e:{sX:16.0,sY:16.0}},{b:13000.0,d:1000.0,sX:-0.3,sY:-0.3,e:{sX:16.0,sY:16.0}},{b:17000.0,d:1000.0,sX:0.4,sY:0.4,e:{sX:16.0,sY:16.0}},{b:21000.0,d:1000.0,sX:0.4,sY:0.4,e:{sX:16.0,sY:16.0}}],
              [{b:4000.0,d:1500.0,x:195.0,y:450.0,r:-90.0},{b:8000.0,d:1500.0,x:-225.0,y:-240.0,r:-90.0},{b:12000.0,d:1500.0,x:-220.0,y:-1140.0,r:120.0},{b:16000.0,d:1500.0,x:400.0,y:580.0,r:100.0},{b:20000.0,d:1500.0,x:350.0,y:350.0,r:90.0}],
              [{b:-1.0,d:1.0,tZ:1.0},{b:4000.0,d:1500.0,o:-0.6}],
              [{b:-1.0,d:1.0,o:-0.6,r:90.0,tZ:1.0},{b:4000.0,d:1500.0,o:0.6},{b:8000.0,d:1500.0,o:-0.6}],
              [{b:-1.0,d:1.0,o:-0.6,r:180.0,tZ:1.0},{b:8000.0,d:1500.0,o:0.6},{b:12000.0,d:1500.0,o:-0.6}],
              [{b:-1.0,d:1.0,o:-0.6,r:60.0,tZ:1.0},{b:12000.0,d:1500.0,o:0.6},{b:16000.0,d:1000.0,o:-0.6}],
              [{b:-1.0,d:1.0,o:-0.6,r:-40.0,tZ:1.0},{b:16000.0,d:1000.0,o:0.6},{b:20000.0,d:1500.0,o:-0.6}],
              [{b:-1.0,d:1.0,o:-0.6,r:-130.0,tZ:1.0},{b:20000.0,d:1500.0,o:0.6}],
              [{b:-1.0,d:1.0,c:{x:250.0,t:-250.0}},{b:0.0,d:1000.0,c:{x:-250.0,t:250.0}},{b:10000.0,d:500.0,y:90.0}],
              [{b:-1.0,d:1.0,c:{x:150.0,t:-150.0}},{b:1000.0,d:1000.0,c:{x:-150.0,t:150.0}},{b:10000.0,d:500.0,c:{y:150.0,m:-150.0}}],
              [{b:2000.0,d:500.0,x:220.0}],
              [{b:3500.0,d:500.0,rX:-20.0},{b:4000.0,d:1000.0,rX:40.0},{b:5000.0,d:500.0,rX:-10.0},{b:9500.0,d:500.0,o:-1.0}],
              [{b:3500.0,d:2000.0,r:360.0}],
              [{b:-1.0,d:1.0,o:-1.0},{b:2500.0,d:500.0,x:76.0,y:-25.0,o:1.0}],
              [{b:-1.0,d:1.0,o:-1.0},{b:2500.0,d:500.0,x:47.0,y:65.0,o:1.0}],
              [{b:-1.0,d:1.0,o:-1.0},{b:2500.0,d:500.0,x:-47.0,y:65.0,o:1.0}],
              [{b:-1.0,d:1.0,o:-1.0},{b:2500.0,d:500.0,x:-76.0,y:-25.0,o:1.0}],
              [{b:-1.0,d:1.0,o:-1.0},{b:2500.0,d:500.0,y:-80.0,o:1.0}],
              [{b:-1.0,d:1.0,c:{x:120.0,t:-120.0}},{b:6100.0,d:400.0,c:{x:-120.0,t:120.0}},{b:10000.0,d:500.0,y:-120.0}],
              [{b:6500.0,d:500.0,x:220.0}],
              [{b:-1.0,d:1.0,o:-1.0,r:180.0,sX:-0.5,sY:-0.5},{b:7000.0,d:500.0,o:1.0,r:180.0,sX:0.5,sY:0.5},{b:8000.0,d:500.0,o:-1.0,r:180.0,sX:9.0,sY:9.0}],
              [{b:-1.0,d:1.0,o:-1.0,r:180.0,sX:-0.5,sY:-0.5},{b:8000.0,d:500.0,o:1.0,r:180.0,sX:0.5,sY:0.5},{b:9000.0,d:500.0,o:-1.0,r:180.0,sX:9.0,sY:9.0}],
              [{b:-1.0,d:1.0,o:-1.0,r:180.0,sX:-0.5,sY:-0.5},{b:9000.0,d:500.0,o:1.0,r:180.0,sX:0.5,sY:0.5},{b:9500.0,d:500.0,o:-1.0,r:180.0,sX:9.0,sY:9.0}]
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions,
                $Breaks: [
                  [{d:3000,b:8500,t:2}],
                  [{d:2000,b:5000}],
                  [{d:3000,b:23000}],
                  [{d:3000,b:9500,t:2}]
                ]
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 980);
                    jssor_1_slider.$ScaleWidth(refSize);
                } else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //Desktop Slider Code End
			
			//Mobile Slider Code Start
			
			var jssor_2_SlideoTransitions = [
              [{b:5500.0,d:3000.0,o:-1.0,r:240.0,e:{r:2.0}}],
              [{b:-1.0,d:1.0,o:-1.0,c:{x:51.0,t:-51.0}},{b:0.0,d:1000.0,o:1.0,c:{x:-51.0,t:51.0},e:{o:7.0,c:{x:7.0,t:7.0}}}],
              [{b:-1.0,d:1.0,o:-1.0,sX:9.0,sY:9.0},{b:1000.0,d:1000.0,o:1.0,sX:-9.0,sY:-9.0,e:{sX:2.0,sY:2.0}}],
              [{b:-1.0,d:1.0,o:-1.0,r:-180.0,sX:9.0,sY:9.0},{b:2000.0,d:1000.0,o:1.0,r:180.0,sX:-9.0,sY:-9.0,e:{r:2.0,sX:2.0,sY:2.0}}],
              [{b:-1.0,d:1.0,o:-1.0},{b:3000.0,d:2000.0,y:180.0,o:1.0,e:{y:16.0}}],
              [{b:-1.0,d:1.0,o:-1.0,r:-150.0},{b:7500.0,d:1600.0,o:1.0,r:150.0,e:{r:3.0}}],
              [{b:10000.0,d:2000.0,x:-379.0,e:{x:7.0}}],
              [{b:10000.0,d:2000.0,x:-379.0,e:{x:7.0}}],
              [{b:-1.0,d:1.0,o:-1.0,r:288.0,sX:9.0,sY:9.0},{b:9100.0,d:900.0,x:-1400.0,y:-660.0,o:1.0,r:-288.0,sX:-9.0,sY:-9.0,e:{r:6.0}},{b:10000.0,d:1600.0,x:-200.0,o:-1.0,e:{x:16.0}}]
            ];
            
            var jssor_2_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);
            function ScaleSlider2() {
                var refSize = jssor_2_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1920);
                    jssor_2_slider.$ScaleWidth(refSize);
                } else {
                    window.setTimeout(ScaleSlider2, 30);
                }
            }
            ScaleSlider2();
            $(window).bind("load", ScaleSlider2);
            $(window).bind("resize", ScaleSlider2);
            $(window).bind("orientationchange", ScaleSlider2);
			//Mobile Slider Code End
        });
		
		
	}])
});

