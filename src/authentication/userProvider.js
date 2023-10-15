import {createContext, useCallback} from "react";
import {useLocalState} from "./useLocalStorage";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const navigate = useNavigate();
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [refreshJwt, setRefreshJwt] = useLocalState("", "refreshJwt");
    const getRolesFromJWT = () => {
        if (jwt) {
            return jwt_decode(jwt);
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

    const validateAndRefreshJwt = useCallback(() => {
        return new Promise((resolve, reject) => {
            if (decodedJwt.sub === "" || decodedJwt.roles.length === 0) {
                resolve("");
            } else if (decodedJwt.exp < Date.now() / 1000) {
                fetch("api/auth/token/refresh", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + refreshJwt
                    },
                    method: "get"
                }).then(res => {
                    if (res.status === 200) {
                        return res.json();
                    } else {
                        return reject(res);
                    }
                })
                    .then(data => {
                        setJwt(data.access_token);
                        resolve(data.access_token);
                    })
                    .catch(() => {
                        resolve(""); // 这里添加 resolve() 来表示异步操作已完成
                    });
            } else {
                resolve(jwt);
            }
        });
    }, [decodedJwt.exp, decodedJwt.roles.length, decodedJwt.sub, jwt, navigate, setJwt]);

    const value = {jwt, setJwt, refreshJwt, setRefreshJwt, decodedJwt, validateAndRefreshJwt};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};


export {UserProvider, UserContext};