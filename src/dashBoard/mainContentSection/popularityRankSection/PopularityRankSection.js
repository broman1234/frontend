import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../../../common/SectionTitle";

const PopularityRankSection = () => {
    return (
        <div>
            <SectionTitle title="Top Books by Popularity"/>
            <Container fluid={true} >

                <Row>
                    <Col>
                        <Card className="custom-card" className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body>
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
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body>
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
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body>
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
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body>
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
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body>
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
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body>
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
        </div>
    );
};

export default PopularityRankSection;