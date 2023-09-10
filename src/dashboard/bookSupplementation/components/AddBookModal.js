import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";

const AddBookModal = ({isOpen, hideAddBookModal}) => {
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
                                <Form.Control type="title" placeholder="Title" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextAuthor">
                            <Form.Label column sm="2">
                                Author
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="author" placeholder="Author" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextCategory">
                            <Form.Label column sm="2">
                                Category
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="category" placeholder="Category" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPublisher">
                            <Form.Label column sm="2">
                                Publisher
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="publisher" placeholder="Publisher" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={hideAddBookModal}
                    >
                        Close
                    </Button>
                    <Button variant="primary">Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddBookModal;