import React from 'react';
import useDashboard from "../actions/useDashboard";
import {Button, Col, Container, Row} from "react-bootstrap";
import BookSupplementation from "../booksupplementation/components/BookSupplementation";
import BookTable from "../booktable/components/BookTable";
import SearchArea from "../searcharea";

const AdminDashboard = () => {
    console.log("go into AdminDashboard!========");
    const {logOut, books, setBooks} = useDashboard();

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
                <BookSupplementation setBooks={setBooks} books={books}/>
                <SearchArea />
                <BookTable setBooks={setBooks} books={books}/>
            </Container>
        </>
    );
};

export default AdminDashboard;