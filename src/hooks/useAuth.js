import { useContext } from "react"; 
import AuthContext from "../context/AuthProvidor";

function useAuth() {
    return useContext(AuthContext);
}

export default useAuth;