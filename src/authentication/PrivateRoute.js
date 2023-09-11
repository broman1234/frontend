import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import useRoles from "./useRoles";

const PrivateRoute = ({ children }) => {
    const {decodedJwt, user} = useRoles();

    const navigate = useNavigate();

    useEffect(() => {
        if (decodedJwt.sub === "" || decodedJwt.roles.length === 0) {
            navigate("/login");
        } else if (decodedJwt.exp < Date.now() / 1000) {
            fetch("api/auth/token/refresh", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.refreshJwt
                },
                method: "get"
            }).then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject(res)
                }
            })
                .then(data => {
                    user.setJwt(data.access_token);
                })
                .catch(error => {
                    error.json().then(data => {
                        navigate("/login");
                    })
                });
        }
    }, [decodedJwt, navigate, user]);

    return children;
};

export default PrivateRoute;