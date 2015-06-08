'use strict';

/* jasmine specs for controllers go here */
describe('foundation controllers', function() {

  beforeEach(module('foundationApp'));

  describe('dataCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/data.json').
          respond([{"id": 1, "name": "First item", "ready": true},
                   {"id": 2, "name": "Second item", "ready": false}]);

      scope = $rootScope.$new();
      ctrl = $controller('dataCtrl', {$scope: scope});
    }));


    it('should create a "data" model with 2 data objects fetched from xhr', function() {
      expect(scope.dummydata).toBeUndefined();
      $httpBackend.flush();

      expect(scope.dummydata).toEqual([{"id": 1, "name": "First item", "ready": true},
                                       {"id": 2, "name": "Second item", "ready": false}]);
    });


    it('should set the default value of orderProp model so data is listed in ID order', function() {
      expect(scope.orderProp).toBe('id');
    });
  });


  describe('dataDetailCtrl', function(){
    var scope, $httpBackend, ctrl,
        xyzDummyData = function() {
          return {

            id: 1,
            name: "first item",
            description: "I'm item one what's good?"

          }
        };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/datas/data-xyz.json').respond(xyzDummyData());

      $routeParams.dataId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('dataDetailCtrl', {$scope: scope});
    }));


    it('should fetch datas details', function() {
      expect(scope.datas).toBeUndefined();
      $httpBackend.flush();

      expect(scope.datas).toEqual(xyzDummyData());
    });
  });
});
