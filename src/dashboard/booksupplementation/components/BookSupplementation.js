import React from 'react';
import {Alert, Button, Col, Row} from "react-bootstrap";
import useBookSupplementation from "../actions/useBookSupplementation";
import AddBookModal from "./AddBookModal";

const BookSupplementation = ({setBooks, books}) => {

    const {
        showAddBookModal,
        isAddBookModalOpen,
        hideAddBookModal,
        isShowBanner,
        bannerStyle,
        bannerMessage
    } = useBookSupplementation();

    return (
        <div>
            <Row>
                <Col>
                    <Alert key={bannerStyle} variant={bannerStyle} show={isShowBanner}>
                        {bannerMessage}
                    </Alert>
                </Col>
            </Row>
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
                isOpen={isAddBookModalOpen}
                hideAddBookModal={hideAddBookModal}
                setBooks={setBooks}
                books={books}
            />
        </div>
    );
};

export default BookSupplementation;