import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../../../common/SectionTitle";
import usePopularityRankSection from "./usePopularityRankSection";

const PopularityRankSection = () => {
    const {booksByPopularityRank} = usePopularityRankSection();

    return (
        <div>
            <SectionTitle title="Top Books by Popularity"/>
            <Container fluid={true} >
                <Row>
                    <Col className="mb-2 custom-col">
                        <Card className="custom-card">
                            <Card.Img variant="top" src="/images/img.png" className="card-img"/>
                            <Card.Body className="custom-card-body">
                                <Card.Title className="custom-card-title">Card Title</Card.Title>
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
                                <Card.Title className="custom-card-title">Card Title</Card.Title>
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
                                <Card.Title className="custom-card-title">Card Title</Card.Title>
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
                                <Card.Title className="custom-card-title">Card Title</Card.Title>
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
                                <Card.Title className="custom-card-title">Card Title</Card.Title>
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
                                <Card.Title className="custom-card-title">Card Title</Card.Title>
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