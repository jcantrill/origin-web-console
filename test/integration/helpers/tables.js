'use strict';

var h = require('../helpers.js');

// takes a protractor element representing a table & returns a list of
// names found in the first td of each row
exports.getNames = function(elem) {
  h.waitForElem(elem);
  return elem.all(by.tagName('tr')).map(function(tableRow) {
    return tableRow.element(by.css('td[data-title="Name"]'))
            .getText().then(function(text) {
              return text;
            });
  });
};

// takes a protractor element representing a table & returns a row count
exports.countRows = function(elem) {
  return elem.all(by.css('tr')).count().then(function(numRows) {
    return numRows;
  });
};
