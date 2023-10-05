import React from 'react';
import LogOut from "./logOutSection/LogOut";
import {Container} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Brand from "./brandSection/Brand";

const TopNavBar = () => {

    return (
        <>
            <Navbar className="navbar-transparent">
                <Container className="custom-container">
                    <Brand />
                    <LogOut />
                </Container>
            </Navbar>

        </>
    );
};

export default TopNavBar;