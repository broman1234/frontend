import React from 'react';
import useLogOut from "./useLogOut";
import {Button} from "react-bootstrap";

const LogOut = () => {
    const {logOut} = useLogOut();
    return (
        <>
            <div className="custom-logout-button-container">
                <Button
                    className="btn btn-secondary mb-1"
                    onClick={logOut}
                    size="sm"
                >
                    Logout
                </Button>
            </div>
        </>
    );
};

export default LogOut;