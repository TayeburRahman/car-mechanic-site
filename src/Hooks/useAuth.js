import { useContext } from "react"
import { AuthContext } from "../component/AuthProvider/AuthProvider";
 


const useAuth = () =>{
    return useContext(AuthContext);
    // console.log(useContext)
};
export default useAuth;