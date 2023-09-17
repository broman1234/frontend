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
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        fetchRoles();
    }, [navigate, user]);

    const updateSelectedRole = (selectedRole) => {
        const newSelectedRoles = ([...selectedRoles, selectedRole]);
        setSelectedRoles(newSelectedRoles);
    }

    const getButtonTitle = () => {
        return fetchedRoles
            .filter(fetchedRole => selectedRoles.includes(fetchedRole.id.toString()))
            .map(role => role.roleName)
            .join(', ');
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
        fetch("api/auth/register", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(reqBody)
        })
            .then(response => {
                if (response.status === 201) {
                } else {
                    return Promise.reject(response);
                }
            })
            .then((body) => {
                    navigate("/login");
                }
            )
            .catch((error) => {
                error.text().then(message => {
                    setErrorMessage(message);
                });
                }
            );
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
        getButtonTitle,
        errorMessage
    }
}

export default useRegister;