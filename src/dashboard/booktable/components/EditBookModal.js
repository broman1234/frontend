import React from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useEditBookModal from "../actions/useEditBookModal";

const EditBookModal = ({isOpen, setIsShowEditBookModal}) => {
    const {closeEditBookModal} = useEditBookModal(isOpen, setIsShowEditBookModal);

    return (
        <div>
            <Modal
                show={isOpen}
                size="lg"
                centered
            >
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit the Book Information!
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
                        <Form.Text className="text-danger">edit book error message</Form.Text>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={closeEditBookModal}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditBookModal;