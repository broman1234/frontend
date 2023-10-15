import React from 'react';
import useAdminDashboard from "../actions/useAdminDashboard";
import {Button, Col, Container, Row} from "react-bootstrap";
import BookTable from "../bookTable";

const AdminDashboard = () => {
    const {logOut, books, setBooks} = useAdminDashboard();

    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Button
                            className="btn btn-secondary mb-1"
                            onClick={logOut}
                            size="sm"
                        >
                            Logout
                        </Button>
                    </Col>
                </Row>
                <BookTable setBooks={setBooks} books={books}/>
            </Container>
        </>
    );
};

export default AdminDashboard;