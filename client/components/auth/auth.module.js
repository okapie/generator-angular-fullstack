'use strict';

angular.module('generatorAngularFullstackApp.auth', [
  'generatorAngularFullstackApp.constants',
  'generatorAngularFullstackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
