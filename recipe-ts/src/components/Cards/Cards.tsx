import React from 'react';
import './style/index.css';

export interface CardsProps {
	columnCount: number
	children?: React.ReactNode;
}

const Cards: React.FC<CardsProps> = ({columnCount = 4, children}) => {
	const cardsStyle = {
		display: 'grid',
		gridGap: '20px',
		gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
	};
	return <ul style={cardsStyle}>{children}</ul>;
};

//TODO: Figure out how to get this to work
// const numberGreaterThan = (min: number) => {
//     return (props: any, propName: any, componentName: any) => {
//         const prop = props[propName];
//         if (prop && (typeof prop !== 'number' || prop < min)) {
//             return new Error(
//                 `Prop ${propName} must be a number greater than ${min} on ${componentName}`
//             );
//         }
//     };
// };

// Cards.propTypes = {
//     columnCount: numberGreaterThan(1),    
// };

// Cards.defaultProps = {
// 	columnCount: 4,
// };

export default Cards;
