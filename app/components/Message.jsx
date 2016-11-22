var React = require('react');

var Message = (props) => {
  var {temp, location} = props;
  return (
    <h2>it's {temp} degree in {location}!!</h2>
  );
};

module.exports = Message;
