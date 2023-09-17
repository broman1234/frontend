import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import useBookSupplementation from "../actions/useBookSupplementation";
import AddBookModal from "./AddBookModal";
import Banner from "../../../banner/Banner";

const BookSupplementation = ({setBooks, books}) => {

    const {
        showAddBookModal,
        isAddBookModalOpen,
        hideAddBookModal,
        isShowAddBookSuccessBanner,
        setIsShowAddBookSuccessBanner,
        bannerStyle,
        bannerMessage
    } = useBookSupplementation();

    return (
        <div>
            <Banner isShowBanner={isShowAddBookSuccessBanner} bannerStyle={bannerStyle} bannerMessage={bannerMessage}/>
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
                setIsShowAddBookSuccessBanner={setIsShowAddBookSuccessBanner}
            />
        </div>
    );
};

export default BookSupplementation;