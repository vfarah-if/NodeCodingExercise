import React, { useState, useEffect } from 'react';
import './style/index.css';
import PropTypes from 'prop-types';

// Example copied from the react cheat sheet to share cycles
const Example = ({ initial }) => {
  const [count, setCount] = useState(initial);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

Example.propTypes = {
  initial: PropTypes.number.isRequired,
};

export default Example;
