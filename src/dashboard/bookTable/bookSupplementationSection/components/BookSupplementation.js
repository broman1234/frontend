import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import useBookSupplementation from "../actions/useBookSupplementation";
import AddBookModal from "./AddBookModal";

const BookSupplementation = ({setBooks, books, fetchBooks}) => {

    const {
        showAddBookModal,
        isAddBookModalOpen,
        hideAddBookModal,
    } = useBookSupplementation();

    return (
        <div>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Button
                        className="btn btn-primary"
                        onClick={showAddBookModal}
                        size="sm"
                    >
                        Add Book
                    </Button>
                </Col>
            </Row>
            <AddBookModal
                isOpen={isAddBookModalOpen}
                hideAddBookModal={hideAddBookModal}
                setBooks={setBooks}
                books={books}
                fetchBooks={fetchBooks}
            />
        </div>
    );
};

export default BookSupplementation;