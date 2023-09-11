import jwt_decode from "jwt-decode";
import useUser from "./useUser";

const useRoles = () => {
    const user = useUser();
    const getRolesFromJWT = () => {
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
    };

    const decodedJwt = getRolesFromJWT();

    return { decodedJwt, user};
}

export default useRoles;



