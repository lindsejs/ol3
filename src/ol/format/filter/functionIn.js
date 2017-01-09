goog.provide('ol.format.filter.FunctionIn');

goog.require('ol');
goog.require('ol.format.filter.Function');


/**
 * @classdesc
 * Represents a `<Function name="in">` filter function.
 *
 * @constructor
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!Array.<string>} values Array of opssbile property values.
 * @extends {ol.format.filter.Function}
 * @api
 */
ol.format.filter.FunctionIn = function(propertyName, values) {
  ol.format.filter.Function.call(this, 'in');

  /**
   * @public
   * @type {!string}
   */
  this.propertyName = propertyName;

  /**
   * @public
   * @type {!Array.<string>}
   */
  this.values = values;

};
ol.inherits(ol.format.filter.FunctionIn, ol.format.filter.Function);
