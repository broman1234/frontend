import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import useAddBookModal from "../actions/useAddBookModal";

const AddBookModal = ({isOpen, hideAddBookModal, setBooks, books, setIsShowAddBookSuccessBanner}) => {
    const {
        submitNewBook,
        bookInfo,
        setBookInfo,
        addBookErrorMessage
    } = useAddBookModal(hideAddBookModal, setBooks, books, setIsShowAddBookSuccessBanner);

    return (
        <div>
            <Modal
                show={isOpen}
                size="lg"
                centered
            >
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add a New Book Here!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextTitle">
                            <Form.Label column sm="2">
                                Title
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="title" placeholder="Title" value={bookInfo.title}
                                              onChange={event => setBookInfo({
                                                  ...bookInfo,
                                                  title: event.target.value
                                              })}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextAuthor">
                            <Form.Label column sm="2">
                                Author
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="author" placeholder="Author" value={bookInfo.author}
                                              onChange={event => setBookInfo({
                                                  ...bookInfo,
                                                  author: event.target.value
                                              })}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextCategory">
                            <Form.Label column sm="2">
                                Category
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="category" placeholder="Category" value={bookInfo.category}
                                              onChange={event => setBookInfo({
                                                  ...bookInfo,
                                                  category: event.target.value
                                              })}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPublisher">
                            <Form.Label column sm="2">
                                Publisher
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="publisher" placeholder="Publisher" value={bookInfo.publisher}
                                              onChange={event => setBookInfo({
                                                  ...bookInfo,
                                                  publisher: event.target.value
                                              })}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextDescription">
                            <Form.Label column sm="2">
                                Description
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="description" placeholder="Description" value={bookInfo.description}
                                              onChange={event => setBookInfo({
                                                  ...bookInfo,
                                                  description: event.target.value
                                              })}/>
                            </Col>
                        </Form.Group>
                        <Form.Text className="text-danger">{addBookErrorMessage}</Form.Text>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={hideAddBookModal}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={submitNewBook}
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddBookModal;