//call react library
var React = require('react');
//destructuring creates a variable = to the method name when calling the function such as: link = require('react-router').Link
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
}

module.exports = Nav;
