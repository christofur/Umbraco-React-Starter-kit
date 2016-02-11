var React = require("react/addons");
var Router = require("react-router");
var Link = Router.Link;

var	ProductApp = React.createClass({

	contextTypes: {
    	router: React.PropTypes.func
  	},

	// Listen for changes
	componentWillMount: function() {
		var ctx = this.context.router.getCurrentParams();

		this.setState(
			{ initialData : ProductStore.getProductAndStartGettingMoreInformation(ctx.productName) }
			);
		
		ProductStore.addFullDetailsChangeListener(this._onChange);
	},

	// Unbind change listener
	componentWillUnmount: function() {
		ProductStore.removeFullDetailsChangeListener(this._onChange);
	},

	_onChange: function() {
		var data = ProductStore.getFullProduct();
		this.setState( {
		 initialData : data,
		  isLoading:false }
		   );
	},

	render: function() {
		var data = this.state.initialData;
;
		return (
			<div>
				<div className="product-content">
					<h1>{data.title}</h1>
					<div dangerouslySetInnerHTML={{__html: data.content}} />

				</div>

			</div>
		);
	}
});

module.exports = { ProductApp : ProductApp };