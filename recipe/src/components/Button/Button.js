import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default function Button({
	primary,
	backgroundColor,
	size,
	displayName,
	...props
}) {
	const mode = primary
		? 'storybook-button--primary'
		: 'storybook-button--secondary';
	return (
		<button
			type="button"
			className={[
				'storybook-button',
				`storybook-button--${size}`,
				mode,
			].join(' ')}
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			{displayName}
		</button>
	);
}

Button.propTypes = {
	primary: PropTypes.bool,
	backgroundColor: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	displayName: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: 'medium',
	onClick: undefined,	
};
