var ProductDispatcher = require('../dispatchers/ProductDispatcher');
var Constants = require('../Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {

	updatingProduct: function(model) {
		ProductDispatcher.handleServerAction({
			type: ActionTypes.UPDATING_Product,
			Product: model
		});
	},

	ProductUpdated: function(ProductModel) {
		ProductDispatcher.handleServerAction({
			type: ActionTypes.Product_UPDATED,
			Product: ProductModel
		});
	},	
	GotFullDetails:function(product){
		ProductDispatcher.handleServerAction({
			type: ActionTypes.FULL_DATA_RETRIEVED,
			product: product
		});
	},
		/** Fired when a search result is returned by the server */
	gotProducts: function(products) {
		ProductDispatcher.handleServerAction({
			type: ActionTypes.GOT_PRODUCTS,
			products: products
		});
	},
	
	errorUpdatingProduct: function( error ) {
		ProductDispatcher.handleServerAction({
			type: ActionTypes.ERROR,
			error: error
		});
		
		console.error( error );
	}
  
  // TODO: See ChatMessageActionCreators for some store manipulation here for adding results to a store https://github.com/facebook/flux/blob/master/examples/flux-chat/js/actions/ChatMessageActionCreators.js
};