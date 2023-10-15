import {useContext, useEffect, useState} from "react";
import {UserContext} from "./userProvider";
import {Navigate, useNavigate} from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { validateAndRefreshJwt, jwt } = useContext(UserContext);
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(false);
    const [isJwtValidLoading, setIsJwtValidLoading] = useState(true);
    const [isJwtInvalidLoading, setIsJwtInvalidLoading] = useState(true);
    const isLogOut = !jwt;
    useEffect(() => {
        validateAndRefreshJwt().then((data) => {
            if (data === "") {
                setIsValid(false);
                setIsJwtInvalidLoading(false);
                navigate("/login");
            } else {
                setIsValid(true);
                setIsJwtValidLoading(false);
            }
        });
    }, [validateAndRefreshJwt, navigate]);

    if (isJwtValidLoading || (isLogOut && isJwtInvalidLoading)) {
        return <div>Loading...</div>;
    } else if (isValid) {
        return children;
    }
    return <Navigate to="/login" />;

};

export default PrivateRoute;