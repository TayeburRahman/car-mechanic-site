import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebass/Firebass.init";

initializeAuthentication();
const useFirebass = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  // Registration user Account STP.9
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  //email-password login check box Stp.10
  const [checkBox, setCheckBox] = useState(false);
  // Registration user Account Name stp.14
  const [fastName, setFastName] = useState('');
  const [secondName, setSecondFastName] = useState('');
  // user login relood for not logout Stp.8
  const [islooding, setIsLooding] = useState(true);
  const signinUsingGoogle = () => {
    // user login relood for not logout Stp.8.1
    setIsLooding(true);
    const googleProvider = new GoogleAuthProvider();
    return (
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          setUser(result.user);
        })
        // user login relood for not logout Stp.8.2
        .finally(() => setIsLooding(false))
    );
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      // user login relood for not logout Stp.8.3
      setIsLooding(false);
    });
    return () => unsubscribed;
  }, []);
  const logOut = () => {
    // user login relood for not logout Stp.8.4
    setIsLooding(true);
    signOut(auth)
      .then(() => {})
      // user login relood for not logout Stp.8.5
      .finally(() => setIsLooding(false));
  };

  // Registration user Account STP.9
  const handleRegistration = (e) => {
    console.log(email, password);
    // error password
    e.preventDefault();
    if (password < 6) {
      setError("Password Must be at least 6 character long");
      return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      setError("Password Must Contain 2 Upper Case");
      return;
    }
    // stp.9.3 or
    // email-password login check box Stp.10.1 & 11.1
    if (checkBox) {
      processLogin(email, password);
    } else {
      createNewUser(email, password);
    }
  };

  // Registration user Account STP.9.1
  const handleEmailChang = (e) => {
    setEmail(e.target.value);
  };

  // Registration user Account STP.9.2
  const handlePasswordChang = (e) => {
    setPassword(e.target.value);
  };

  // Registration user Account Name stp.14
  const handleFastNameChang = (e) => {
    setFastName(e.target.value);
  };
  const handleSecondNameChang = (e) => {
    setSecondFastName(e.target.value);
  };

  // Registration firebase STP.9 & 11
  const createNewUser = (email, password) => {
    // Registration firebase STP.9.3
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("Verification Sent Email");
        //  Email verification sent Stp.12.1 end
        verifyEmail();
        // Registration user Account Name stp.14.2
        registerName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // email-password login check box Stp.10
  const toggoleLogin = (e) => {
    setCheckBox(e.target.checked);
    console.log(e.target.checked);
  };
  //rgtr user email-password login Stp.11
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //  Email verification sent Stp.12
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(result => {
      console.log("email verify", result);
      if (result) {
        setError("Your Registration Successful");
      }
    });
  };

  // user Reset Password STP.13 
  const handelResetPassword =() =>{
    sendPasswordResetEmail(auth, email)
    .then(result => {

    });
};

  // Registration user Account Name stp.14.1
  const registerName = ()=>{
    updateProfile(auth.currentUser, {displayName: fastName + ' ' + secondName})
    .then(result => {

    });

  }

  return {
    user,
    islooding,
    signinUsingGoogle,
    logOut,
    handleRegistration,
    handleEmailChang,
    handlePasswordChang,
    error,
    toggoleLogin,
    processLogin,
    handelResetPassword,
    handleFastNameChang,
    handleSecondNameChang
  };
};
export default useFirebass;
