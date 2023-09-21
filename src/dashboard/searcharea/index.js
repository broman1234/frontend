import React from 'react';
import {Col, Container, Row, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const SearchArea = ({bookRequest, setBookRequest, fetchBooks}) => {

    return (
        <>
            <Container fluid={true} className="search-area">
                <Row className="mt-3">
                    <Col>
                        <Form.Group controlId="title" >
                            <Form.Label className="d-flex justify-content-center">Title</Form.Label>
                            <Form.Control className="mb-3"
                                type="title"
                                value={bookRequest.title}
                                onChange={event => setBookRequest({...bookRequest, title: event.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="author">
                            <Form.Label className="d-flex justify-content-center">Author</Form.Label>
                            <Form.Control
                                type="author"
                                value={bookRequest.author}
                                onChange={event => setBookRequest({...bookRequest, author: event.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="category">
                            <Form.Label className="d-flex justify-content-center">Category</Form.Label>
                            <Form.Control
                                type="category"
                                value={bookRequest.category}
                                onChange={event => setBookRequest({...bookRequest, category: event.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="publisher">
                            <Form.Label className="d-flex justify-content-center">Publisher</Form.Label>
                            <Form.Control
                                type="publisher"
                                value={bookRequest.publisher}
                                onChange={event => setBookRequest({...bookRequest, publisher: event.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Button onClick={fetchBooks}>Search</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SearchArea;