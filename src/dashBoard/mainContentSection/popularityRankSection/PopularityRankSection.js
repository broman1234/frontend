import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../../../common/SectionTitle";

const PopularityRankSection = () => {
    return (
        <div>
            <SectionTitle title="Top Books by Popularity"/>
            <Container fluid={true} >
                <Row>
                    <Col className="mb-2" className="mb-2">
                        <Card className="custom-card" className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body className="custom-card-body">
                                <Card.Title>Card Title</Card.Title>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <Card.Text>
                                    Prust
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-2">
                        <Card className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body className="custom-card-body">
                                <Card.Title>Card Title</Card.Title>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <Card.Text>
                                    Prust
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-2">
                        <Card className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body className="custom-card-body">
                                <Card.Title>Card Title</Card.Title>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <Card.Text>
                                    Prust
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-2">
                        <Card className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body className="custom-card-body">
                                <Card.Title>Card Title</Card.Title>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <Card.Text>
                                    Prust
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-2">
                        <Card className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body className="custom-card-body">
                                <Card.Title>Card Title</Card.Title>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <Card.Text>
                                    Prust
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-2">
                        <Card className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body className="custom-card-body">
                                <Card.Title>Card Title</Card.Title>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <Card.Text>
                                    Prust
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="horizontal-line"></div>
        </div>
    );
};

export default PopularityRankSection;