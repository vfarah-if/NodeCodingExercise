import React from 'react';
import PropTypes from 'prop-types';

import './style/index.css';

const Thumbnail = ({ imageSource, description, ...rest }) => {
	return (
		<>
			<img
				className='thumbnail'
				src={imageSource}
				alt={description || ''}
				{...rest}
			/>
		</>
	);
};

Thumbnail.propTypes = {
	imageSource: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

Thumbnail.defaultProps = {
	description: '',
};

export default Thumbnail;
