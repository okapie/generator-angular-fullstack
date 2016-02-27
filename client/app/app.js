'use strict';

angular.module('generatorAngularFullstackApp', [
  'generatorAngularFullstackApp.auth',
  'generatorAngularFullstackApp.admin',
  'generatorAngularFullstackApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
