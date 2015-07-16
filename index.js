'use strict';

var ultramarked = require('ultramarked');

exports.name = 'ultramarked';
exports.outputFormat = 'html';
exports.inputFormats = ['markdown', 'md'];
exports.render = function (str, options) {
  ultramarked.setOptions(options);
  return ultramarked(str);
};
