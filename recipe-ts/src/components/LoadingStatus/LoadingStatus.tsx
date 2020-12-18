import React from 'react';
import './style/index.css';

export interface LoadingStatusProps {
	isLoading: boolean;
}

const LoadingStatus: React.FC<LoadingStatusProps> = ({
	isLoading
}) => {
	return isLoading ? (
		<div className="loader"></div>
	) : null;
};

export default LoadingStatus;
