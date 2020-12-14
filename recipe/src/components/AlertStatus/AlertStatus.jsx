import React from 'react';
import PropTypes from 'prop-types';
import './style/index.css';

const AlertStatus = ({ alertType, message }) => {
	const handleHideErrorAlert = (event) => {
		const divElement = event.target.parentElement;
		divElement.style.opacity = '0';
		setTimeout(() => (divElement.style.display = 'none'), 600);
	};

	return message ? (
		<div className={['alert', alertType].join(' ')}>
			<span className="closebtn" onClick={handleHideErrorAlert}>
				&times;
			</span>
			{message}
		</div>
	) : null;
};

AlertStatus.propTypes = {
	alertType: PropTypes.oneOf(['error', 'success', 'info', 'warning']),
	message: PropTypes.string
};

AlertStatus.defaultProps = {
	alertType: 'error'
};

export default AlertStatus;