import React, { useState } from "react";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config/firebase-config";

import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

import classes from "./signup.module.css";

function SignUP() {
  
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const provider = new GoogleAuthProvider();

  //To sign-in with Email and Password
const signInWithEmail = () => {
  createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then((result) => {
      console.log(result);
  }).catch((error) => {
      console.log(error);
  })
}

//To sign-In with Google
const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
      console.log(result);
  }).catch((error) => {
      console.log(error);
  })
}

  return (
    <div>
      <div className={classes.signUP}>
        <div className={classes.signUpForm}>
          <h2>SIGN UP</h2>
          <div className={classes.userInfo}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="email" onChange={(event) => {setRegisterEmail(event.target.value);}}/>
            <input type="password" placeholder="password" onChange={(event) => {setRegisterPassword(event.target.value);}}/>
            <div className={classes.btn}>
              <input type="submit" value="SignUp" onClick={signInWithEmail}/>
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
