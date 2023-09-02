import useUser from "../../authentication/useUser";

const useDashboard = () => {

    const user = useUser();

    const logOut = () => {
        user.setJwt("");
        user.setRefreshJwt("");
    }

    return {logOut};
}

export default useDashboard;