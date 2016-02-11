var React = require("react/addons");
var Router = require("react-router");
var Link = Router.Link;
var ArticleItem = React.createClass({
	render: function() {

		return (
			<div className="ArticleItem">
				<h2>{this.props.article.title}</h2>
				<p>{this.props.article.content}</p>
				<Link to="article" params={{articleName: this.props.article.urlName}}>View More and {this.props.article.numberOfComments} Comment{this.props.article.numberOfComments>1?"s":""}</Link>
			</div>
		);
	}
});

var	ArticleFolderApp = React.createClass({
	
	render: function() {
		var articles = ArticleStore.getArticles();
		var boxes = articles.map(function(item,index){
			return <ArticleItem article={item} key={item.urlName} />
		});
		return (
			<div>
				{boxes}
				<h4>curr 0.0.0.1</h4>
			</div>

		);
	}
});

module.exports = { ArticleFolderApp : ArticleFolderApp };