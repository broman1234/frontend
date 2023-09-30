import React from 'react';
import {Alert, Col, Row} from "react-bootstrap";

const Banner = ({isShowErrorBanner, isShowSuccessBanner, bannerStyle, bannerMessage, children}) => {

    return (
        <>
            {isShowErrorBanner && (
                <Row>
                    <Col>
                        <Alert key={bannerStyle} variant={bannerStyle} show={isShowErrorBanner}>
                            {bannerMessage}
                        </Alert>
                    </Col>
                </Row>
            )}

            {isShowSuccessBanner && (
                <Row>
                    <Col>
                        <Alert key={bannerStyle} variant={bannerStyle} show={isShowSuccessBanner}>
                            {bannerMessage}
                        </Alert>
                    </Col>
                </Row>
            )}
            {children}
        </>
    );
};

export default Banner;