import {useCallback, useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import useUser from "./useUser";

const useRoles = () => {
    const user = useUser();
    const [decodedJwt, setDecodedJwt] = useState({
        exp: null,
        iat: null,
        roles: [],
        sub: ""
    })
    const getRolesFromJWT = useCallback(() => {
        if (user.jwt) {
            return jwt_decode(user.jwt);
        } else {
            return {
                exp: null,
                iat: null,
                roles: [],
                sub: ""
            };
        }
    }, [user.jwt]);


    useEffect(() => {
        setDecodedJwt(getRolesFromJWT());
    }, [user.jwt, getRolesFromJWT, user.refreshJwt]);

    return { decodedJwt, user};
}

export default useRoles;



