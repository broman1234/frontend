import {useCallback, useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import useUser from "./useUser";

const useRoles = () => {
    const [roles, setRoles] = useState([]);
    const user = useUser();

    const getRolesFromJWT = useCallback(() => {
        if (user.jwt) {
            const decodedJwt = jwt_decode(user.jwt);
            return decodedJwt.authorities;
        } else {
            return [];
        }
    }, [user.jwt]);

    useEffect(() => {
        console.log("JWT has changed");
        setRoles(getRolesFromJWT());
    }, [user.jwt, getRolesFromJWT]);

    return { roles };
}

export default useRoles;



