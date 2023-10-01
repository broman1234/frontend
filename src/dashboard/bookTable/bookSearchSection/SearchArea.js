import React from 'react';
import {Col, Container, Row, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const SearchArea = ({bookRequest, setBookRequest, fetchBooks}) => {

    return (
        <>
            <Container fluid={true} className="search-area">
                <Row>
                    <Col>
                        <Form.Group controlId="title" >
                            <Form.Label className="d-flex justify-content-center"><strong className="search-area-label">Title</strong></Form.Label>
                            <Form.Control className="mb-3"
                                type="title"
                                value={bookRequest.title}
                                onChange={event => setBookRequest({...bookRequest, title: event.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="author">
                            <Form.Label className="d-flex justify-content-center"><strong className="search-area-label">Author</strong></Form.Label>
                            <Form.Control
                                type="author"
                                value={bookRequest.author}
                                onChange={event => setBookRequest({...bookRequest, author: event.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="category">
                            <Form.Label className="d-flex justify-content-center"><strong className="search-area-label">Category</strong></Form.Label>
                            <Form.Control
                                type="category"
                                value={bookRequest.category}
                                onChange={event => setBookRequest({...bookRequest, category: event.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="publisher">
                            <Form.Label className="d-flex justify-content-center"><strong className="search-area-label">Publisher</strong></Form.Label>
                            <Form.Control
                                type="publisher"
                                value={bookRequest.publisher}
                                onChange={event => setBookRequest({...bookRequest, publisher: event.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center col-1">
                        <Button onClick={fetchBooks} style={{backgroundColor: "#d0bdf4", color: "black", borderColor: "white"}}>Search</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SearchArea;