import React from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from '../../context/authContext';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import classes from "./signup.module.css";

function SignUP() {


  return (
    <div>
      <div className={classes.signUP}>
        <div className={classes.signUpForm}>
          <h2>SIGN UP</h2>
          <div className={classes.userInfo}>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <div className={classes.btn}>
              <input type="submit" value="Login"></input>
            </div>
            <div className={classes.signUpsocials}>
              Or Sign Up with
              <div className={classes.socials}>
                <Link>
                  <FcGoogle onClick={ signInWithGoogle }/>
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
              Already a member?
              <Link to="">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUP;
