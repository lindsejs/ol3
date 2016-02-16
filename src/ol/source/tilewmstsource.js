goog.provide('ol.source.TileWMSTSource');

goog.require('goog.asserts');
goog.require('goog.math');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.uri.utils');
goog.require('ol');
goog.require('ol.source.TileWMS');


/**
 * @classdesc
 * Layer source for tile data from WMS Time servers with preloading next Time tiles
 *
 * @constructor
 * @extends {ol.source.TileWMS}
 * @param {olx.source.TileWMSOptions=} opt_options Tile WMS options.
 * @api stable
 */
ol.source.TileWMSTSource = function(opt_options) {

  var options = opt_options || {};
  goog.base(this, options);
  this.times_ = options.times;

};
goog.inherits(ol.source.TileWMSTSource, ol.source.TileWMS);

ol.source.TileWMSTSource.prototype.getKeyZXY = function(z, x, y, time) {
  if (!time) {
    time = this.params_["TIME"];
  }
  if (time) {
    time = "/" + time;
  } else {
    time = "";
  }
  return this.coordKeyPrefix_ + goog.base(this, 'getKeyZXY', z, x, y) + time;
};

ol.source.TileWMSTSource.prototype.getParamsKey_ = function(time) {
  var i = 0;
  var res = [];
  for (var key in this.params_) {
    if (time && key === "TIME") {
      res[i++] = key + '-' + time;
    } else {
      res[i++] = key + '-' + this.params_[key];
    }
  }
  return res.join('/');
};

ol.source.TileWMSTSource.prototype.resetParamsKey_ = function() {
  this.paramsKey_ = this.getParamsKey_();
};

ol.source.TileWMSTSource.prototype.getTileInternal = function(z, x, y, pixelRatio, projection) {
  //preload next time tile
  var time = this.params_["TIME"];
  if (this.times_ && time) {
    var l = this.times_.length;
    var ind = null;
    for (var i = 0; i < l; i++) {
      if (this.times_[i] == time) {
        ind = i + 1;
        if (i + 1 == l) {
          ind = 0;
        }
        break;
      }
    }
    if (ind) {
      var tileCoordKey = this.getKeyZXY(z, x, y, this.times_[ind]);
      var paramsKey = this.getParamsKey_(this.times_[ind]);
      if (!this.tileCache.containsKey(tileCoordKey)) {
        goog.asserts.assert(projection, 'argument projection is truthy');
        this.params_["TIME"] = this.times_[ind];
        var tile = this.createTile_(z, x, y, pixelRatio, projection, paramsKey);
        tile.load();
        this.tileCache.set(tileCoordKey, tile);
        this.params_["TIME"] = time;
      }
    }
  }
  return goog.base(this, 'getTileInternal', z, x, y, pixelRatio, projection);
};
