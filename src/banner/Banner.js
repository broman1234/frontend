import React from 'react';
import {Alert, Col, Row} from "react-bootstrap";

const Banner = ({isShowBanner, bannerStyle, bannerMessage, children}) => {

    return (
        isShowBanner ?
        <Row className="mt-3">
            <Col>
                <Alert key={bannerStyle} variant={bannerStyle} show={isShowBanner}>
                    {bannerMessage}
                </Alert>
            </Col>
        </Row> : children
    );
};

export default Banner;