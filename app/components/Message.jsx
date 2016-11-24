var React = require('react');

var Message = (props) => {
  var {temp, location} = props;
  return (
    <h3 className="text-center">it's {temp} degree in {location}!!</h3>
  );
};

module.exports = Message;
