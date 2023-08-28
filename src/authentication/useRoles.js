import {useCallback, useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import useUser from "./useUser";

const useRoles = () => {
    const user = useUser();
    const [roles, setRoles] = useState([]);
    const getRolesFromJWT = useCallback(() => {
        if (user.jwt) {
            const decodedJwt = jwt_decode(user.jwt);
            return decodedJwt.roles;
        } else {
            return [];
        }
    }, [user.jwt]);

    useEffect(() => {
        console.log("JWT has changed", user.jwt);
        setRoles(getRolesFromJWT());
    }, [user.jwt, getRolesFromJWT]);

    return { roles };
}

export default useRoles;



