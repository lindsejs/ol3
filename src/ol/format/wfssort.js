goog.provide('ol.format.WfsSort');

goog.require('ol');


/**
 * @classdesc
 * Class for WFS GetFeature sortBy.
 *
 * @constructor
 * @param {!string} propertyName Name of the context property to sort by.
 * @param {!string} order Sorting order - ASC or DESC.
 * @api stable
 */
ol.format.WfsSort = function(propertyName, order) {

  /**
   * @public
   * @type {!string}
   */
  this.propertyName = propertyName;

  /**
   * @public
   * @type {!string}
   */
  this.order = order;
};
