//see notes-5-28

var React = require('react');
var ReactDOM = require('react-dom');

//routing
//destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load Foundation or Bootstrap
//css! loader chained with style loader
require('style!css!foundation-sites/dist/foundation.min.css');
//App css
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="about" component={About}/>
    <Route path="examples" component={Examples}/>
    <IndexRoute component={Weather}/>
  </Route>
</Router>,
  document.getElementById('app')
);
