'use strict';

angular.module('todoApp')
  .controller('TodoCtrl', function ($scope, $http) {
    $scope.status = 'Loading...';
    $http.get('/api/todos').success(function(data) {
        $scope.status = 'Done...';
        $scope.todos = data;
    });
  });
