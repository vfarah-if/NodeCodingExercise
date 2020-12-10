import React from 'react';

export const LoadingStatus = ({ isLoading, displayValue }) => {
    return isLoading ? <p>{displayValue || 'Loading ...'}</p> : null;
}

export default LoadingStatus;
