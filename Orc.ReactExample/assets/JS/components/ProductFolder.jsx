var React = require("react/addons");
var Router = require("react-router");
var Link = Router.Link;
var ProductItem = React.createClass({
	render: function() {

		return (
			<div className="ProductItem">
				<h2>{this.props.product.title}</h2>
				<p>{this.props.product.content}</p>
				<Link to="product" params={{productName: this.props.product.urlName}}>View More and {this.props.product.numberOfComments} Comment{this.props.product.numberOfComments>1?"s":""}</Link>
			</div>
		);
	}
});

var	ProductFolderApp = React.createClass({

	render: function() {
		var products = ProductStore.getProducts();
		var boxes = products.map(function(item,index){
			return <ProductItem product={item} key={item.urlName} />
		});
		return (
			<div>
				{boxes}
				<h4>curr 0.0.0.1</h4>
			</div>

		);
	}
});

module.exports = { ProductFolderApp : ProductFolderApp };