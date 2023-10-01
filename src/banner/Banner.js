import React from 'react';
import {Alert, Col, Row} from "react-bootstrap";

const Banner = ({isShowErrorBanner, isShowSuccessBanner, bannerStyle, bannerMessage, children}) => {

    return (
        <>
            {isShowErrorBanner && (
                <Row>
                    <Col>
                        <Alert key={bannerStyle} variant={bannerStyle} show={isShowErrorBanner}
                               style={{height: "40px", marginBottom: "0px", padding: "0px", color: "gray"}}
                               className="d-flex align-items-center justify-content-center">
                            <strong>{bannerMessage}</strong>
                        </Alert>
                    </Col>
                </Row>
            )}

            {isShowSuccessBanner && (
                <Row>
                    <Col>
                        <Alert key={bannerStyle} variant={bannerStyle} show={isShowSuccessBanner}
                               style={{height: "40px", marginBottom: "0px", padding: "0px", color: "gray"}}
                               className="d-flex align-items-center justify-content-center">
                            <strong>{bannerMessage}</strong>
                        </Alert>
                    </Col>
                </Row>
            )}
            {children}
        </>
    );
};

export default Banner;