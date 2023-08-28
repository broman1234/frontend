import useUser from "../../authentication/useUser";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const useLogin = () => {
    const user = useUser();
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (user.jwt) {
            navigate("/dashboard");
        }
    }, [navigate, user]);

    const sendLoginRequest = () => {
        const reqBody = {
            "username": username,
            "password": password
        };
        fetch("api/auth/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody)
        })
            .then(response => {
                if (response.status === 200) {
                    return Promise.all([response.json()]);
                } else {
                    return Promise.reject("Invalid login attempt");
                }
            })
            .then(([body]) => {
                user.setJwt(body.access_token);
            }).catch((message) => {
            alert(message);
        });
    }

    return {
        username,
        password,
        setUsername,
        setPassword,
        sendLoginRequest,
    }
}

export default useLogin;