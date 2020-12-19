
import React from 'react';
import './style/index.css';

export interface CardProps {
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
    return <li className="card">{props.children}</li>;
}

export default Card;
