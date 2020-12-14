import React from 'react';
import './style/index.css';

const Cards = (props) => {
	const cardsStyle = {
		display: 'grid',
		gridGap: '20px',
        gridTemplateColumns: `repeat(${props.columnCount || 4}, 1fr)`,        
	};

	return <ul style={cardsStyle}>{props.children}</ul>;
};

// REMARKS: Custom validator to make sure there is never less than 1 column
const numberGreaterThan = (min) => {
    return (props, propName, componentName) => {
        const prop = props[propName];
        if (typeof prop !== 'number' || prop < min) {
            return new Error(
                `Prop ${propName} must be a number greater than ${min} on ${componentName}`
            );
        }
    };
};

Cards.propTypes = {
    columnCount: numberGreaterThan(1),
    
};

Cards.defaultProps = {
	columnCount: 4,
};

export default Cards;
