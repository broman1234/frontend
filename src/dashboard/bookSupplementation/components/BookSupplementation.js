import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import useBookSupplementation from "../actions/useBookSupplementation";
import AddBookModal from "./AddBookModal";

const BookSupplementation = () => {

    const {showAddBookModal, isOpen, hideAddBookModal} = useBookSupplementation();

    return (
        <div>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Button
                        className="btn btn-primary"
                        onClick={showAddBookModal}
                    >
                        Add Book
                    </Button>
                </Col>
            </Row>
            <AddBookModal
                isOpen={isOpen}
                hideAddBookModal={hideAddBookModal}
            />
        </div>
    );
};

export default BookSupplementation;