import React from 'react';
import {Alert, Col, Row} from "react-bootstrap";

const Banner = ({isShowBanner, bannerStyle, bannerMessage}) => {

    return (
        <Row>
            <Col>
                <Alert key={bannerStyle} variant={bannerStyle} show={isShowBanner}>
                    {bannerMessage}
                </Alert>
            </Col>
        </Row>
    );
};

export default Banner;