"use strict";

var ProductDispatcher = require('../dispatchers/ProductDispatcher');
var Constants = require('../Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require("object-assign");
var ProductViewActionCreators = require('../actions/ProductViewActionCreators');
var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';
var CHANGE_EVENT_FULL_DETAILS = 'gotFullDetails';
var _products = {};
var _fullProduct = null;


var ProductStore = assign({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  emitFullDetails: function () {
    this.emit(CHANGE_EVENT_FULL_DETAILS);
  },

  /**
   * @param {function} callback
   */
  addFullDetailsChangeListener: function (callback) {
    this.on(CHANGE_EVENT_FULL_DETAILS, callback);
  },

  removeFullDetailsChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT_FULL_DETAILS, callback);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getProducts: function () {
      return JSON.parse(JSON.stringify(_products));
  },
  getFullProduct: function () {
    return JSON.parse(JSON.stringify(_fullProduct));
  },

  getProductAndStartGettingMoreInformation: function (urlSlug) {

    if (_fullProduct != null && _fullProduct.urlName == urlSlug) {
      return JSON.parse(JSON.stringify(_fullProduct));
    }

    var products = JSON.parse(JSON.stringify(_products));
    var found = {};
    for (var i = products.length - 1; i >= 0; i--) {
      var product = products[i];
      if (product.urlName == urlSlug) {
        found = product;
      }
    }
    ;
    ProductViewActionCreators.getFullDetails(urlSlug);
    return found;
  }
});

ProductStore.dispatchToken = ProductDispatcher.register(function (payload) {
  var action = payload.action;
  //console.log("ACTION FIRED",action);
  switch (action.type) {
    case ActionTypes.FULL_DATA_RETRIEVED:
      _fullProduct = action.product;
      ProductStore.emitFullDetails();
      break;
    case ActionTypes.GOT_PRODUCTS:
      _products = action.products;
      ProductStore.emitChange();
      break;
    case ActionTypes.PRODUCTS_UPDATED:
      _products = action.Product;
      ProductStore.emitChange();
      break;
    default:
    // do nothing
  }

});

module.exports = ProductStore;