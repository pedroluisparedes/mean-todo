'use strict';

angular.module('todoApp')
    .controller('TodoCtrl', function($scope, $http) {
        // Get todos.
        $http.get('/api/todos').success(function(data) {
            $scope.todos = data;
        });

        $scope.toggle = function(todo) {
            console.log(todo);
        };
    });