'use strict';

/* App Module */

var foundationApp = angular.module('foundationApp', [
  'ngRoute',
  'foundationControllers',
  'foundationFilters'
]);

foundationApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html'
      }).
      when('/data', {
        templateUrl: 'partials/data/list.html',
        controller: 'dataCtrl'
      }).
      when('/data/:dataId', {
        templateUrl: 'partials/data/detail.html',
        controller: 'dataDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
