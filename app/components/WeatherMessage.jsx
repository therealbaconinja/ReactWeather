var React = require('react');

//destructuring in line - was (props)
var WeatherMessage = ({temp,location}) => {
  //var {temp, location} = props;
  return (
    <div>
      <h3>It's {temp} in {location}.</h3>
    </div>
  );
}

module.exports = WeatherMessage;
