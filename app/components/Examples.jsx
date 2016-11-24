var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
    <h1 className="text-center">Examples</h1>
    <p>Welcome to example page!</p>
    <ol>
        <li>
            <Link to='/?location=Japan'>Japan</Link>
        </li>
        <li>
            <Link to='/?location=Rio'>Rio</Link>
        </li>
    </ol>
    </div>
  );
};


module.exports = Examples;
