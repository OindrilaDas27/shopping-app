import React from "react";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

import RegisterCard from "../../components/Cards/signUp-LogInCard";
import classes from './login.module.css';

function LogIn() {
    return(
        <div>
            <div className={classes.logIn}>
                <RegisterCard>
                <h2>LOG IN</h2>
                <div className={classes.userInfo}>
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <div className={classes.btn}>
                    <input type="submit" value="Log In"/>
                    </div>
                    <div className={classes.logInsocials}>
                    Or Sign Up with
                    <div className={classes.socials}>
                        <Link>
                        <FcGoogle />
                        </Link>
                        <Link className={classes.facebook}>
                        <ImFacebook2 />
                        </Link>
                        <Link className={classes.twitter}>
                        <FaTwitter />
                        </Link>
                        <Link to="">
                        <BsTelephoneFill />
                        </Link>
                    </div>
                    </div>
                    <div className={classes.login}>
                    Dont have an account?
                    <Link to="/signup">SignUp</Link>
                    </div>
                </div>
                </RegisterCard>
            </div>
        </div>
    )
}

export default LogIn;