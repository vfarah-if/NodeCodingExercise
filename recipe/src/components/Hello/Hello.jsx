import React from 'react';
import './style/index.css';
import PropTypes from 'prop-types';

export default function Hello({ name }) {
	return <h1 className="name">Hello {name || 'stranger'}</h1>;
}


Hello.propTypes = {
	name: PropTypes.string,
};