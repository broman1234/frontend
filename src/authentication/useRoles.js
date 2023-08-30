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
            const decodedJwt = jwt_decode(user.jwt);
            console.log("decodedJwt=============", decodedJwt);
            return decodedJwt;
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
        console.log("JWT has changed", user.jwt);
        setDecodedJwt(getRolesFromJWT());
    }, [user.jwt, getRolesFromJWT]);

    return { decodedJwt, user};
}

export default useRoles;



