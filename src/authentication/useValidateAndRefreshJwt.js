import useRoles from "./useRoles";
import {useNavigate} from "react-router-dom";

const useValidateAndRefreshJwt = () => {
    const {user, decodedJwt} = useRoles();
    const navigate = useNavigate();

    const validateAndRefreshJwt = () => {
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
    }


    return {validateAndRefreshJwt, user}
};

export default useValidateAndRefreshJwt

