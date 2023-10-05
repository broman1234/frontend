import React from 'react';
import Navbar from "react-bootstrap/Navbar";

const Brand = () => {
    return (
        <>
            <Navbar.Brand className="custom-navbar-brand">
                <img
                    alt=""
                    src="/images/img.png"
                    className="topNavbarBrandImg"
                />{' '}
                <span className="brand-title">
                    Bookish World
                </span>
            </Navbar.Brand>
        </>
    );
};

export default Brand;