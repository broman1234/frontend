import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import useRoles from "./useRoles";
import useValidateAndRefreshJwt from "./useValidateAndRefreshJwt";


const PrivateRoute = ({ children }) => {
    const {decodedJwt, user} = useRoles();
    const navigate = useNavigate();
    const {validateAndRefreshJwt} = useValidateAndRefreshJwt()

    useEffect(validateAndRefreshJwt, [decodedJwt, navigate, user, validateAndRefreshJwt]);

    return children;
};

export default PrivateRoute;