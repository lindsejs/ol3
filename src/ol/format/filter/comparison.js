goog.provide('ol.format.filter.Comparison');

goog.require('ol');
goog.require('ol.format.filter.Filter');


/**
 * @classdesc
 * Abstract class; normally only used for creating subclasses and not instantiated in apps.
 * Base class for WFS GetFeature property comparison filters.
 *
 * @constructor
 * @param {!string} tagName The XML tag name for this filter.
 * @param {!string} propertyName Name of the context property to compare.
 * @param {ol.format.filter.Function=} opt_filterFunction filter function to use instead of propertyName.
 * @extends {ol.format.filter.Filter}
 * @api
 */
ol.format.filter.Comparison = function(tagName, propertyName, opt_filterFunction) {

  ol.format.filter.Filter.call(this, tagName);

  /**
   * @public
   * @type {!string}
   */
  this.propertyName = propertyName;

  /**
   * @public
   * @type {null|ol.format.filter.Function|undefined}
   */
  this.filterFunction = opt_filterFunction;
};
ol.inherits(ol.format.filter.Comparison, ol.format.filter.Filter);
