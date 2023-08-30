import {Navigate} from "react-router-dom";

const PrivateRoute = ({decodedJwt, user, children}) => {

    if (decodedJwt.sub === "" || decodedJwt.roles.length === 0) {
        return <Navigate to="/login" />;
    } else if (decodedJwt.exp < Date.now() / 1000) {
        fetch("api/auth/token/refresh", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + user.jwt
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
                console.log("===========", data.access_token);
                user.setJwt(data.access_token);
            })
            .catch(error => {
                error.json().then(data => {
                    console.log("return error data: ", data);
                    return <Navigate to="/login" />;
                })
            });
    }
    return children;
};

export default PrivateRoute;