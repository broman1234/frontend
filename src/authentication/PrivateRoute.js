import {useContext, useEffect} from "react";
import {UserContext} from "./userProvider";


const PrivateRoute = ({children}) => {
    const {validateAndRefreshJwt} = useContext(UserContext);

    useEffect(() => {
        async function fetchData() {
            validateAndRefreshJwt();
        }

        fetchData().then(() => {
        });
    }, [validateAndRefreshJwt]);

    return children;
};

export default PrivateRoute;