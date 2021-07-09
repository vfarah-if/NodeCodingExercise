
import React from 'react';
import './style/index.css';

export interface AlertStatusProps {
    alertType?: 'error'|'success'|'info'|'warning', 
    message?: string | null
}

const AlertStatus: React.FC<AlertStatusProps> = ({alertType = 'error', message = ''}) => {
    // TODO: Try investigate how this can be fixed
    // const handleHideErrorAlert = (event:  React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const handleHideErrorAlert = (event:  any) => {  
		const divElement = event.target.parentElement as HTMLDivElement;
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
}

export default AlertStatus;
