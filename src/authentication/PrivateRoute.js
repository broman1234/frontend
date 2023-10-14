import {useContext, useEffect, useState} from "react";
import {UserContext} from "./userProvider";
import {Navigate, useNavigate} from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { validateAndRefreshJwt, jwt } = useContext(UserContext);
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLogOutLoading, setIsLogOutLoading] = useState(true);
    const isLogOut = !jwt;
    useEffect(() => {
        validateAndRefreshJwt().then((data) => {
            if (data !== "") {
                console.log("data is valid==============", data);
                setIsValid(true);
                setIsLoading(false);
            } else {
                console.log("data is invalid==============", data);
                setIsValid(false);
                setIsLogOutLoading(false);
                navigate("/login");
            }
        });
    }, [validateAndRefreshJwt, navigate]);

    if (isLoading || (isLogOut && isLogOutLoading)) {
        return <div>Loading...</div>;
    } else if (isValid) {
        return children;
    }
    return <Navigate to="/login" />;

};

export default PrivateRoute;