import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebass.confice";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;