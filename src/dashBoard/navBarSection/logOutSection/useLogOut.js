import {useContext} from "react";
import {UserContext} from "../../../authentication/userProvider";

const useLogOut = () => {
    const {setJwt, setRefreshJwt} = useContext(UserContext);
    const logOut = () => {
        setJwt("");
        setRefreshJwt("");
    }
    return {logOut}
}

export default useLogOut;