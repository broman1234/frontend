import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Col, Dropdown, DropdownButton, Row} from "react-bootstrap";
import useAddBookModal from "../actions/useAddBookModal";

const AddBookModal = ({isOpen, hideAddBookModal, setBooks, books, fetchBooks}) => {
    const {
        submitNewBook,
        bookInfo,
        setBookInfo,
        addBookErrorMessage,
        fetchedCategories,
        updateSelectedCategory,
        getButtonTitle
    } = useAddBookModal(hideAddBookModal, setBooks, books, fetchBooks);

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
                                <DropdownButton
                                    id="categories"
                                    title={getButtonTitle()}
                                    onSelect={selectedCategory => updateSelectedCategory(selectedCategory)}
                                >
                                    {fetchedCategories.map(category => (
                                        <Dropdown.Item key={category} eventKey={category}>
                                            {category}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
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