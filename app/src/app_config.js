/*
 * Here the configuration of the application is done.
 * This is primary for routing but also for the theming of angular material via the routeProvider.
 * More to come...
 */
 (function() {

     'use strict';

     angular.module('MainApp')
         // Register page routing
         .config(function($routeProvider, $mdThemingProvider) {

             $routeProvider
                 .when('/', {
                     templateUrl: 'src/home/homeView.html',
                     controller: 'homeController',
                     controllerAs: 'homeCtrl'
                 });

             $mdThemingProvider.theme('default')
                 .primaryPalette('light-blue')
                 .accentPalette('blue');

         });





 })();
