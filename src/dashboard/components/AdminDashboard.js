import React from 'react';
import useDashboard from "../actions/useDashboard";
import {Button, Col, Container, Row} from "react-bootstrap";
import BookSupplementation from "../bookSupplementation/components/BookSupplementation";

const AdminDashboard = () => {
    console.log("go into AdminDashboard!========");
    const {logOut} = useDashboard();

    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Button
                            className="btn btn-secondary"
                            onClick={logOut}
                        >
                            Logout
                        </Button>
                    </Col>
                </Row>
                <BookSupplementation />

            </Container>
        </>
    );
};

export default AdminDashboard;