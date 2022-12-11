import React, { useState } from 'react';
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

function NavBar() {

    //to display the dropdown component when hovered over Profile 
    const [ display, setDisplay ] = useState(false);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Logo</div>
            <nav>
                <ul>
                    <div className={classes.items}>
                <li>
                    <Link to=''>Item 1</Link>
                </li>
                <li>
                    <Link to=''>Item 2</Link>
                </li>
                <li>
                    <Link to=''>Item 3</Link>
                </li>
                <li>
                    <Link to=''>Item 4</Link>
                </li>
                </div>
                <div className={classes.creds}>
                <li onClick={() => setDisplay(!display)}>
                    <Link>Profile</Link>
                </li>
                <li>
                    <Link to=''>Wishlist</Link>
                </li>
                <li>
                    <Link to=''>Bag</Link>
                </li>
                </div>
                </ul>
                {display && (
                    <Dropdown />
                    )}
            </nav>
        </header>
    );
}

export default NavBar;