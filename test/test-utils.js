var util = {};
var _ = require('lodash');
var utilMapProperty = require('../lib/utils/map-properties');
var fs = require('fs');

var mapping = {
  'string': "String",
  'boolean': "Boolean",
  'number': "BigDecimal",
  'integer': "Long",
  'array': "List",
  'object': "Map",
  'file': "InputStream"
};

util.handleData = function (schemas) {
  var deref = require('deref')();
  var parsed = [];
  for (var key in schemas) {
    var normalizeSchema = deref(schemas[key], schemas);
    var schemaParsed = utilMapProperty.mapProperties(normalizeSchema, deref.refs, mapping);
    parsed.push(schemaParsed);
  }
  return parsed
};



module.exports = util;