import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const useLogin = (decodedJwt, user) => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState()

    useEffect(() => {
        if (user.jwt && decodedJwt.exp >= Date.now() / 1000) {
            navigate("/dashboard");
        }
    }, [navigate, user.jwt, decodedJwt.exp]);

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
                    return Promise.reject("Wrong username or password");
                }
            })
            .then(([body]) => {
                user.setJwt(body.access_token);
                user.setRefreshJwt(body.refresh_token);
            }).catch((message) => {
            setErrorMessage(message);
        });
    }

    const goToRegisterPage = () => {
        navigate("/register");
    }

    return {
        username,
        password,
        setUsername,
        setPassword,
        sendLoginRequest,
        goToRegisterPage,
        errorMessage
    }
}

export default useLogin;