goog.provide('ol.format.filter.Function');

goog.require('ol');
goog.require('ol.format.filter.Filter');


/**
 * @classdesc
 * Abstract class; normally only used for creating subclasses and not instantiated in apps.
 * Base class for WFS GetFeature function filters.
 *
 * @constructor
 * @param {!string} functionName Name of Filter function.
 * @extends {ol.format.filter.Filter}
 * @api
 */
ol.format.filter.Function = function(functionName) {

  ol.format.filter.Filter.call(this, 'Function');

  /**
   * @public
   * @type {!string}
   */
  this.functionName = functionName;
};
ol.inherits(ol.format.filter.Function, ol.format.filter.Filter);
