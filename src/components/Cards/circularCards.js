import React from 'react';
import classes from './circularCard.module.css';

function CircularCard(props) {
    return <div className={classes.card}>{props.children}</div>
}

export default CircularCard;