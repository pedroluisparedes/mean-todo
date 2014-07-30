'use strict';

describe('Directive: todoDirective', function () {

  // load the directive's module and view
  beforeEach(module('todoApp'));
  beforeEach(module('app/todoDirective/todoDirective.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<todo-directive></todo-directive>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the todoDirective directive');
  }));
});