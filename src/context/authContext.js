
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../config/firebase-config';

const provider = new GoogleAuthProvider();

//To sign-In with Google
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
}