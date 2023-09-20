import React from 'react';
import {Col, Container, Row, Form} from "react-bootstrap";

const SearchArea = () => {
    return (
        <>
            <Container fluid={true}>
                <Row className="mt-3">
                    <Col className="d-flex justify-content-center">
                        <Form.Group>
                            <Form.Label className="d-flex justify-content-center">Title</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label className="d-flex justify-content-center">Author</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label className="d-flex justify-content-center">Category</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label className="d-flex justify-content-center">Publisher</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SearchArea;