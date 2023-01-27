import React from 'react';
import classes from './sections.module.css';

function SectionCard(props) {
    return <div className={classes.card}>{props.children}</div>
}

export default SectionCard;