import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebass.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;