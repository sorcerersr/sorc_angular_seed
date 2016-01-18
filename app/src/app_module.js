/*
 * In this file the modules and their dependencies are defined.
 */
(function () {

	'use strict';

	// Define all sub apps for MainApp module
	angular.module('HomeModule', [

    ]);

	// Define MainApp module and inject all dependencies/Modules
	angular.module('MainApp', [
        'ngRoute',
        'ngMaterial',
        'HomeModule'
    ]);

})();
