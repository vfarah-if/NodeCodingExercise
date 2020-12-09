import React from 'react';
import PropTypes from 'prop-types';

import './hello.css';

export default function Hello({ name }) {
	return <h1 className="name">Hello {name || 'stranger'}</h1>;
}

Hello.propTypes = {
	name: PropTypes.string,
};
