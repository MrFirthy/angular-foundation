'use strict';

/* Controllers */

var foundationControllers = angular.module('foundationControllers', []);

foundationControllers.controller('dataCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/data.json').success(function(data) {
      $scope.dummydata = data;
    });

    //order data by ID
    $scope.orderProp = 'id';
  }]);

foundationControllers.controller('dataDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/datas/data-' + $routeParams.dataId + '.json').success(function(data) {
      $scope.datas = data;
      //$scope.mainImageUrl = data.images[0];
    });
  }]);