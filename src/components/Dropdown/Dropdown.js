import React from 'react'
import classes from './Dropdown.module.css';
import { Link } from 'react-router-dom';

function Dropdown() {
    // const [display, setDisplay] = useState(false);
    // const handleClick = () => setDisplay(!display);

    return(
        <div className={classes.dropdown}>
            <h4>Welcome</h4>
            <p>To access account and manage orders</p>
            <ul>
                <li>
                    <button><Link to='/signup'>SignUp/LogIn</Link></button>
                </li>
                <li>
                    <Link to=''>Orders</Link>
                </li>
                <li>
                    <Link to=''>Wishlist</Link>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;