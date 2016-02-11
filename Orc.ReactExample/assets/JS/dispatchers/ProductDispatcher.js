var Constants = require('../Constants');
var Dispatcher = require('flux').Dispatcher;

var PayloadSources = Constants.PayloadSources;

var ProductDispatcher = new Dispatcher();

/**
* @param {object} action The details of the action, including the action's
* type and additional data coming from the server.
*/
ProductDispatcher.handleServerAction = function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
};

/**
* @param {object} action The details of the action, including the action's
* type and additional data coming from the view.
*/
ProductDispatcher.handleViewAction = function(action) {

	var payload = {
	  source: PayloadSources.VIEW_ACTION,
	  action: action
	};
	this.dispatch(payload);
};

module.exports = ProductDispatcher;