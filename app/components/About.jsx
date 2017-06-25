var React = require('react');

//Refactoring components
//note: you can only refactor components that have:
//a. A Render method
//b. Don't maintain any state

//1. NORMAL REACT CLASS DEFINTION

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

//2. STATELESS FUNCTIONAL COMPONENT
// var About = function (props) {
//   return (
//     <h3>About Component</h3>
//   )
// };

//3. REDUCE FURTHER WITH ARROW FUNCTIONS!
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to my first React App! The following resources helped make this happen: </p>
      <h4><a href="http://www.udemy.com" target="_blank">Udemy.com</a></h4>
      <p>Change your life through learning!</p>
      <h4><a href="https://github.com/therealbaconinja/ReactWeather" target="_blank">My App on Github.com</a></h4>
      <p>Teach a person to fish and they might make you dinner!</p>
      <h4><a href="http://www.heroku.com" target="_blank">Heroku.com</a></h4>
      <p>Get your head IN the Cloud!</p>
      <h4><a href="http://www.openweathermap.org" target="_blank">Open Weather Map</a></h4>
      <p>What will those Clouds do today?!</p>

      {/* <div className="card">
        <div className="card-divider">
          Learning
        </div>
        <img src="https://www.udemy.com/staticx/udemy/images/v5/logo-green.svg"/>
        <div className="card-section">
          <h4><Link to="http://www.udemy.com">Udemy.com</Link></h4>
          <p>Change your life through learning!</p>
        </div>
      </div>
      <div className="card">
        <div className="card-divider">
          Sharing
        </div>
        <img src="https://s3.amazonaws.com/media.eremedia.com/uploads/2017/01/23143044/github4.jpg"/>
        <div className="card-section">
          <h4><Link to="https://github.com/therealbaconinja/ReactWeather">This ReactWeather on Github.com</Link></h4>
          <p>Teach a person to fish and they might make you dinner!</p>
        </div>
      </div>
      <div className="card">
        <div className="card-divider">
          Hosting
        </div>
        <img src="http://perfect.org/images/heroku-logo.jpg"/>
        <div className="card-section">
          <h4><Link to="http://www.heroku.com">Heroku.com</Link></h4>
          <p>Get your head IN the Cloud!</p>
        </div>
      </div> */}

    </div>
  )
};


module.exports = About;
