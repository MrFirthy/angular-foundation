'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('foundation App', function() {

  it('should redirect index.html to index.html#/', function() {
    browser.get('index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url).toBe('/');
      });
  });


  describe('data list view', function() {

    beforeEach(function() {
      browser.get('index.html#/data/');
    });


    it('should show the data list', function() {

      var dataList = element.all(by.repeater('data in dummydata'));

      expect(dataList.count()).toBe(3);

    });


    it('should show the data list in ID order', function() {

      var dataIDColumn = element.all(by.repeater('data in dummydata').column('data.name'));

      function getNames() {
        return dataIDColumn.map(function(elm) {
          return elm.getText();
        });
      }

      expect(getNames()).toEqual([
        "First item",
        "Second item",
        "Third item"
      ]);

    });


    it('should render data specific links', function() {
      element.all(by.css('.data-list li a')).first().click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url).toBe('/data/1');
      });
    });
  });


  describe('data detail view', function() {

    beforeEach(function() {
      browser.get('index.html#/data/1');
    });


    it('should display the data-1 page', function() {
      expect(element(by.binding('datas.name')).getText()).toBe('first item');
    });

  });
});
