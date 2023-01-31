import React from 'react';
import classes from './signUp-LogInCard.module.css';

function RegisterCard(props) {
    return <div className={classes.card}>{props.children}</div>
}

export default RegisterCard;