import React from 'react';
import {Navigate} from "react-router-dom";
import useUser from "./useUser";

const PrivateRoute = (props) => {
    const user = useUser();

    if (props.decodedJwt.sub === "" || props.decodedJwt.roles === []) {
        return <Navigate to="/login"/>;
    } else if (props.decodedJwt.exp < Date.now() / 1000) {
        fetch("api/auth/token/refresh", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "get"
        }).then(res => res.json()).then(data => {
            if (data.error_message) {
                return <Navigate to="/login"/>;
            }
            user.setJwt(data.access_token);
        })
    }
    return props.children
};

export default PrivateRoute;