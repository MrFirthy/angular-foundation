'use strict';

/* Filters */

angular.module('foundationFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
