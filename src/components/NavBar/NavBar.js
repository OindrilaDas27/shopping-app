import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
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
                <li>
                    <Link to=''>Profile</Link>
                </li>
                <li>
                    <Link to=''>Wishlist</Link>
                </li>
                <li>
                    <Link to=''>Bag</Link>
                </li>
                </div>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;