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
    <h3>About Component</h3>
  )
};


module.exports = About;
