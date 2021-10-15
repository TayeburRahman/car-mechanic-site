import { getAuth,onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebass/Firebass.init";


initializeAuthentication();
const useFirebass =()=>{
    const [user, setUser
    ] = useState({})
    // user login relood for not logout Stp.8
    const [islooding, setIsLooding] = useState(true);
    const auth = getAuth();
    const signinUsingGoogle = ()=>{
        // user login relood for not logout Stp.8.1
        setIsLooding(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .then(result => {
        setUser(result.user);
    })
    // user login relood for not logout Stp.8.2
    .finally(() => setIsLooding(false));

};
useEffect(() =>{
    const unsubscribed = onAuthStateChanged(auth, user =>{
        if(user){
            setUser(user);
        }
        else{
            setUser({})
        }
        // user login relood for not logout Stp.8.3
        setIsLooding(false)

    });
    return()=> unsubscribed;
}, []);
const logOut = () =>{
    // user login relood for not logout Stp.8.4
    setIsLooding(true);
    signOut(auth)
    .then(() => {})
    // user login relood for not logout Stp.8.5
    .finally(() => setIsLooding(false));
}

    return{
        user,
        islooding,
        signinUsingGoogle,
        logOut,
    }
};
export default useFirebass;
