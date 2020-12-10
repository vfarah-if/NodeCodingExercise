
import React, { Fragment } from 'react';

const LoadingStatus = (({ isLoading, displayValue }) => {
    return isLoading ? <Fragment><p>{displayValue || 'Loading ...'}</p></Fragment> : null;
});

export default LoadingStatus
