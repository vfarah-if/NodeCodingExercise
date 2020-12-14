
import React from 'react';
import './style/index.css';

const Card = (props) => {
    return <li className="card">{props.children}</li>;
};

export default Card
