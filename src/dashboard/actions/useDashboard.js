import useUser from "../../authentication/useUser";
import {useState} from "react";

const useDashboard = () => {

    const user = useUser();
    const [books, setBooks] = useState([]);

    const logOut = () => {
        user.setJwt("");
        user.setRefreshJwt("");
    }

    return {logOut, books, setBooks};
}

export default useDashboard;