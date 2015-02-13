exports.getType = getType = function(elem) {
  return Object.prototype.toString.call(elem).slice(8, -1);
};

/**
 * Converts anything to an ID. An ID must have only lowercase alphanumeric
 * characters.
 * If a string is passed, it will be converted to lowercase and
 * non-alphanumeric characters will be stripped.
 */
exports.toId = function (text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '');
};
