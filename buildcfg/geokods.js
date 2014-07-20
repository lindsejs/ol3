goog.require('ol.Feature');
goog.require('ol.Map');
goog.require('ol.View');
goog.require('ol.geom.Point');
goog.require('ol.layer.Tile');
goog.require('ol.layer.Vector');
goog.require('ol.source.TileWMS');
goog.require('ol.source.Vector');
goog.require('ol.style.Icon');
goog.require('ol.style.Style');
goog.require('ol.Attribution');
goog.require('ol.source.OSM');

goog.exportSymbol(
    'ol.Feature',
    ol.Feature);
    
goog.exportSymbol(
    'ol.Attribution',
    ol.Attribution);
    
goog.exportSymbol(
    'ol.source.OSM.DATA_ATTRIBUTION',
    ol.source.OSM.DATA_ATTRIBUTION
);

goog.exportSymbol(
    'ol.geom.Point',
    ol.geom.Point);

goog.exportSymbol(
    'ol.style.Style',
    ol.style.Style);

goog.exportSymbol(
    'ol.style.Icon',
    ol.style.Icon);

goog.exportSymbol(
    'ol.layer.Vector',
    ol.layer.Vector);

goog.exportSymbol(
    'ol.source.Vector',
    ol.source.Vector);

goog.exportSymbol(
    'ol.layer.Tile',
    ol.layer.Tile);

goog.exportSymbol(
    'ol.source.TileWMS',
    ol.source.TileWMS);

goog.exportSymbol(
    'ol.Map',
    ol.Map);

goog.exportSymbol(
    'ol.View',
    ol.View);

goog.exportProperty(
    ol.Feature.prototype,
    'setStyle',
    ol.Feature.prototype.setStyle);

