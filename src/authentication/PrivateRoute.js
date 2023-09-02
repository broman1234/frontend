import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const PrivateRoute = ({ decodedJwt, user, children }) => {
    const navigate = useNavigate();

    console.log("private route component has been rendered", decodedJwt.sub, decodedJwt.roles, user.jwt, user.refreshJwt);

    useEffect(() => {
        if (decodedJwt.sub === "" || decodedJwt.roles.length === 0) {
            console.log("not authenticated=============", decodedJwt.exp);
            navigate("/login");
        } else if (decodedJwt.exp < Date.now() / 1000) {
            console.log("access jwt has expired=============");
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
                        console.log("return error data: ", data);
                        navigate("/login");
                    })
                });
        }
    }, [decodedJwt, navigate, user]);

    return children;
};

export default PrivateRoute;