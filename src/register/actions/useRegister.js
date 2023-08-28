import useUser from "../../authentication/useUser";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const useRegister = () => {
    const user = useUser();
    const navigate = useNavigate();
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

    const updateSelectedRole = (selectedRole) => {
        const newSelectedRoles = ([...selectedRoles, selectedRole]);
        setSelectedRoles(newSelectedRoles);
    }

    const getButtonTitle = () => {
        const buttonTitle = fetchedRoles
            .filter(fetchedRole => selectedRoles.includes(fetchedRole.id.toString()))
            .map(role => role.roleName)
            .join(', ');
        console.log(buttonTitle)
        return buttonTitle;
    }

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

    const sendRegisterRequest = () => {
        const reqBody = {
            username: username,
            password: password,
            roles: fetchedRoles.filter(role => selectedRoles.includes(role.id.toString()))
        };
        // console.log(reqBody);
        fetch("api/auth/register", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(reqBody)
        })
            .then(response => {
                console.log(response)
                if (response.status === 201) {
                    // navigate("/login");
                } else {
                    return Promise.reject("Invalid register attempt");
                }
            })
            .then((body) => {
                    console.log(body);
                    navigate("/login");
                }
            )
            .catch((message) => {
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
        sendRegisterRequest,
        updateSelectedRole,
        getButtonTitle
    }
}

export default useRegister;