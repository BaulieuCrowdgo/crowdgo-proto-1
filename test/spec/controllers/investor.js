'use strict';

describe('Controller: InvestorCtrl', function () {

  // load the controller's module
  beforeEach(module('crowdgoProto1App'));

  var InvestorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvestorCtrl = $controller('InvestorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InvestorCtrl.awesomeThings.length).toBe(3);
  });
});
