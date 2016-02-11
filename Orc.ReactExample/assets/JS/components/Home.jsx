var React = require("react/addons");
var Router = require("react-router");
var Link = Router.Link;

var	HomeApp = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  // Listen for changes
  componentWillMount: function() {
    var ctx = this.context.router.getCurrentParams();

  },

  // Unbind change listener
  componentWillUnmount: function() {

  },

  render: function() {

    return (
        <div>
          <div className="article-content">
            <h1>This is the homepage, made up from Static Content</h1>
          </div>
        </div>
    );
  }
});

module.exports = { HomeApp : HomeApp };