import React from 'react';
import SectionTitle from "../../../common/SectionTitle";
import {Card, Col, Container, Row} from "react-bootstrap";
import useRatingRankSection from "./useRatingRankSection";
import getStarRating from "../../../utils/getStarRating";

const RatingRankSection = () => {
    const {booksByRatingRank} = useRatingRankSection();

    const bookComponents = booksByRatingRank.slice(0, 6).map(book => (
        <Col className="mb-2" key={book.id}>
            <Card className="custom-card">
                <Card.Img variant="top" src={book.coverImage} className="card-img"/>
                <Card.Body className="custom-card-body">
                    <Card.Title className="custom-card-title">{book.title} ({book.publisher})</Card.Title>
                    {getStarRating(book.rating).map((icon, index) => (
                        <span key={index}>{icon}</span>
                    ))}
                    <span>(Rating count: {book.ratingCount})</span>
                    <Card.Text>
                        {book.author}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ));

    // 切分书籍卡片以满足每行三个 Col 的要求
    const rows = [];
    for (let i = 0; i < bookComponents.length; i += 3) {
        rows.push(
            <Row key={i}>
                {bookComponents.slice(i, i + 3)}
            </Row>
        );
    }

    return (
        <div>
            <SectionTitle title="Top Books by Rating"/>
            <Container fluid={true} >
                {rows}
            </Container>
            <div className="horizontal-line"></div>
        </div>
    );
};

export default RatingRankSection;