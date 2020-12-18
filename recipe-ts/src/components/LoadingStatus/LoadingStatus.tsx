import React from 'react';
import './style/index.css';

export interface LoadingStatusProps {
	isLoading: boolean;
	displayValue?: string;
}

const LoadingStatus: React.FC<LoadingStatusProps> = ({
	isLoading,
	displayValue,
}) => {
	return isLoading ? (
		<>
			<p>{displayValue || 'Loading ...'}</p>
		</>
	) : null;
};

export default LoadingStatus;
