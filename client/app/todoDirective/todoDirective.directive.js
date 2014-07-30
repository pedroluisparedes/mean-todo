'use strict';

angular.module('todoApp')
    .directive('todo', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/todoDirective/todoDirective.html',
            link: function(scope, element, attrs) {
                var checkbox = element.find('.checkbox');

                element.bind('click', function() {
                    checkbox.toggleClass('checked');
                    scope.todo.done = !scope.todo.done;
                    scope.$apply(attrs.toggle);
                });
            }
        };
    });