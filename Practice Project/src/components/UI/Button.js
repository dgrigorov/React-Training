import React from 'react';

import classes from './Button.module.css';

const Card = (props) => {
    return (
        <div>
            <button className={`${classes.button} ${props.className}`} type={props.type || 'button'} onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    );
};

export default Card;
