'use strict';

angular.module('generatorAngularFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('member', {
        url: '/member',
        templateUrl: 'app/member/member.html',
        controller: 'MemberCtrl'
      });
  });
