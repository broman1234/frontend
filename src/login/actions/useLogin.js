import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../authentication/userProvider";

const useLogin = () => {
    const {decodedJwt, jwt, setJwt, setRefreshJwt} = useContext(UserContext);
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState()

    useEffect(() => {
        if (jwt && decodedJwt.exp >= Date.now() / 1000) {
            navigate("/dashboard");
        }
    }, [navigate, jwt, decodedJwt.exp]);

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
                setJwt(body.access_token);
                setRefreshJwt(body.refresh_token);
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