import {useContext, useState} from "react";
import {UserContext} from "../../authentication/userProvider";

const useAdminDashboard = () => {
    const {setJwt, setRefreshJwt} = useContext(UserContext);
    const [books, setBooks] = useState([]);

    const logOut = () => {
        setJwt("");
        setRefreshJwt("");
    }

    return {logOut, books, setBooks};
}

export default useAdminDashboard;