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
                        className="btn btn-primary d-flex align-items-center"
                        onClick={showAddBookModal}
                        size="sm"
                        style={{height: "40px", backgroundColor: "#d0bdf4", color: "black", borderColor: "white"}}
                    >
                        <div>Add Book</div>
                    </Button>
                </Col>
            </Row>
            {isAddBookModalOpen && <AddBookModal
                isOpen={isAddBookModalOpen}
                hideAddBookModal={hideAddBookModal}
                setBooks={setBooks}
                books={books}
                fetchBooks={fetchBooks}
            />}
        </div>
    );
};

export default BookSupplementation;