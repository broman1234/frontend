import useUser from "../../authentication/useUser";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const useLogin = () => {
    const user = useUser();
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fetchedRoles, setFetchedRoles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);

    useEffect(() => {
        if (user.jwt) {
            navigate("/dashboard");
        } else {
            fetchRoles();
        }
    }, [navigate, user]);

    const fetchRoles = () => {
        fetch("api/auth/roles", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "get"
            }
        )
          .then(response => {
                if (response.status === 200) {
                    return Promise.all([response.json()]);
                } else {
                    return Promise.reject("Cannot fetch roles");
                }
            })
          .then(([body]) => {
                setFetchedRoles(body);
            }).catch((message) => {
            alert(message);
        });
    }

    const sendLoginRequest = () => {
        const reqBody = {
            "username": username,
            "password": password,
            "roles": fetchedRoles.filter(role => selectedRoles.includes(role.id))
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
                user.setJwt(body.get("access_token"));
            }).catch((message) => {
            alert(message);
        });
    }

    return {
        username,
        password,
        fetchedRoles,
        setUsername,
        setPassword,
        selectedRoles,
        setSelectedRoles,
        sendLoginRequest,
    }
}

export default useLogin;