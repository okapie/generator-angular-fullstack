'use strict';

describe('Controller: MemberCtrl', function () {

  // load the controller's module
  beforeEach(module('generatorAngularFullstackApp'));

  var MemberCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemberCtrl = $controller('MemberCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
