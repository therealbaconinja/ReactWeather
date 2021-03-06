//call react library
var React = require('react');
//destructuring creates a variable = to the method name when calling the function such as: link = require('react-router').Link
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    var location = this.refs.search.value;
    //encode strings when passing in URL
    var encodedLocation = encodeURIComponent(location);
    if (location.length > 0 ) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;

    }
  },  
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search weather by city" ref="search" />
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
          </form>
        </div>

      </div>
    );
  }
});

module.exports = Nav;
