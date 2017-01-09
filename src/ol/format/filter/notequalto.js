goog.provide('ol.format.filter.NotEqualTo');

goog.require('ol');
goog.require('ol.format.filter.ComparisonBinary');


/**
 * @classdesc
 * Represents a `<PropertyIsNotEqualTo>` comparison operator.
 *
 * @constructor
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!(string|number)} expression The value to compare.
 * @param {boolean=} opt_matchCase Case-sensitive?
 * @param {ol.format.filter.Function=} opt_filterFunction filter function to use instead of propertyName.
 * @extends {ol.format.filter.ComparisonBinary}
 * @api
 */
ol.format.filter.NotEqualTo = function(propertyName, expression, opt_matchCase, opt_filterFunction) {
  ol.format.filter.ComparisonBinary.call(this, 'PropertyIsNotEqualTo', propertyName, expression, opt_matchCase, opt_filterFunction);
};
ol.inherits(ol.format.filter.NotEqualTo, ol.format.filter.ComparisonBinary);
