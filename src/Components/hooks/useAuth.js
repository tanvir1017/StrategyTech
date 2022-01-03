import { useContext } from "react"
import { Authcontext } from "../contexts/AuthProvider/AuthProvider";


const useAuth = () => {
    return useContext(Authcontext);
}
export default useAuth;