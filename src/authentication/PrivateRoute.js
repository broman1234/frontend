import {useNavigate} from "react-router-dom";

const PrivateRoute = ({decodedJwt, user, children}) => {
    const navigate = useNavigate();

    console.log("private route component has been rendered", decodedJwt.sub, decodedJwt.roles);
    if (decodedJwt.sub === "" || decodedJwt.roles.length === 0) {
        console.log("not authenticated=============");
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
    return children;
};

export default PrivateRoute;