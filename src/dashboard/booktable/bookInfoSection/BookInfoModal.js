import React from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useBookInfoModal from "./useBookInfoModal";
import SubmitConfirmationPopup from "./SubmitConfirmationPopup";

const BookInfoModal = ({isOpen, setIsOpen, currentBook, setCurrentBook, books, setBooks}) => {
    const {
        closeBookInfoModal,
        isEditEnabled,
        handleEdit,
        editedBook,
        setEditedBook,
        cancelEditing,
        handleSubmit,
        isShowSubmitConfirmationPopup,
        openSubmitConfirmationPopup,
        closeSubmitConfirmationPopup,
        fetchBookInfoErrorMessage
    } = useBookInfoModal(setIsOpen, currentBook, setCurrentBook, books, setBooks);

    return (
        <>
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
                                <Form.Control type="title" placeholder={currentBook.title} readOnly={!isEditEnabled}
                                              value={editedBook.title}
                                              onChange={event => setEditedBook({
                                                  ...editedBook,
                                                  title: event.target.value
                                              })}

                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextAuthor">
                            <Form.Label column sm="2">
                                Author
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="author" placeholder={currentBook.author} readOnly={!isEditEnabled}
                                              value={editedBook.author}
                                              onChange={event => setEditedBook({
                                                  ...editedBook,
                                                  author: event.target.value
                                              })}

                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextCategory">
                            <Form.Label column sm="2">
                                Category
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="category" placeholder={currentBook.category}
                                              readOnly={!isEditEnabled}
                                              value={editedBook.category}
                                              onChange={event => setEditedBook({
                                                  ...editedBook,
                                                  category: event.target.value
                                              })}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPublisher">
                            <Form.Label column sm="2">
                                Publisher
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="publisher" placeholder={currentBook.publisher}
                                              readOnly={!isEditEnabled}
                                              value={editedBook.publisher}
                                              onChange={event => setEditedBook({
                                                  ...editedBook,
                                                  publisher: event.target.value
                                              })}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextDescription">
                            <Form.Label column sm="2">
                                Description
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="title" placeholder={currentBook.description} readOnly={!isEditEnabled}
                                              value={editedBook.description}
                                              onChange={event => setEditedBook({
                                                  ...editedBook,
                                                  description: event.target.value
                                              })}

                                />
                            </Col>
                        </Form.Group>
                        <Form.Text className="text-danger">{fetchBookInfoErrorMessage}</Form.Text>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={closeBookInfoModal}
                    >
                        Close
                    </Button>
                    {isEditEnabled &&
                        <Button variant="danger"
                                onClick={cancelEditing}
                        >
                            Cancel
                        </Button>}
                    <Button
                        onClick={handleEdit}
                    >
                        Edit
                    </Button>
                    {isEditEnabled &&
                        <Button variant="primary"
                                onClick={openSubmitConfirmationPopup}
                        >
                            Submit
                        </Button>}
                    <SubmitConfirmationPopup isOpen={isShowSubmitConfirmationPopup} handleSubmit={handleSubmit}
                                             closePopup={closeSubmitConfirmationPopup}/>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BookInfoModal;