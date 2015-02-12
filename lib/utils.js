exports.getType = getType = function(elem) {
  return Object.prototype.toString.call(elem).slice(8, -1);
};
