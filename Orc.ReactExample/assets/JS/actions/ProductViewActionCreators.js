var ProductDispatcher = require('../dispatchers/ProductDispatcher');
var Constants = require('../Constants');
var ProductStore = global.ProductStore;
//var ProductStoreHelpers = require("../stores/ProductStoreHelpers");
var ActionTypes = Constants.ActionTypes;
var WebAPIUtils = require("../utils/WebAPIUtils" );

module.exports = {

	/** Fired when a search result is returned by the server */
	getFullDetails: function( urlSlug ) {
		ProductDispatcher.handleViewAction({
			type: ActionTypes.GETTING_FULL_ARTICLE,
			urlSlug:urlSlug,
	
		});
		WebAPIUtils.getFullDetails( urlSlug );
	},


};