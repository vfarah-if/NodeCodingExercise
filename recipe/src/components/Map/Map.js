import React from 'react';
import PropTypes from 'prop-types';
import './map.css';

export default function Map({center}) {
    return (
        <div className="map">
            <p>Represents a map with '{center}' configured</p>
        </div>    
    )
}

Map.propTypes = {
    center: PropTypes.string.isRequired
}