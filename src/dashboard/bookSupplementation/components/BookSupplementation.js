import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import useBookSupplementation from "../actions/useBookSupplementation";
import AddBookModal from "./AddBookModal";

const BookSupplementation = () => {

    const {addBook} = useBookSupplementation();

    return (
        <div>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Button
                        className="btn btn-primary"
                        onClick={addBook}
                    >
                        Add Book
                    </Button>
                </Col>
            </Row>
            <AddBookModal />
        </div>
    );
};

export default BookSupplementation;