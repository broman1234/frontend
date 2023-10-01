import React from 'react';
import {Col, Container, Pagination, Row} from "react-bootstrap";

const PageFooter = ({pageInfo, handlePageClick}) => {
    return (
        <Container className="fixed-footer">
            <Row>
                <Col className="d-flex justify-content-center">
                    {pageInfo.lastPage < 10 ? <Pagination style={{
                        "--bs-pagination-active-bg": "#d0bdf4",
                        "--bs-pagination-active-border-color": "white",
                        "--bs-pagination-color": "white",
                        "--bs-pagination-bg": "transparent"
                    }}>
                        {[...Array(pageInfo.lastPage).keys()].map(
                            pageNumber =>
                                <Pagination.Item key={pageNumber}
                                                 onClick={() => handlePageClick(pageNumber + 1)}
                                                 active={pageNumber + 1 === pageInfo.currentPage}>{pageNumber + 1}
                                </Pagination.Item>
                        )}
                    </Pagination> : <Pagination style={{
                        "--bs-pagination-active-bg": "#d0bdf4",
                        "--bs-pagination-active-border-color": "white",
                        "--bs-pagination-color": "white",
                        "--bs-pagination-bg": "transparent"
                    }}>
                        <Pagination.First
                            onClick={() => handlePageClick(pageInfo.firstPage)}
                        />
                        <Pagination.Prev
                            onClick={() => handlePageClick(pageInfo.currentPage - 1)}
                            disabled={pageInfo.currentPage <= pageInfo.firstPage}
                        />
                        <Pagination.Item
                            onClick={() => handlePageClick(pageInfo.firstPage)}
                            active={pageInfo.firstPage === pageInfo.currentPage}>{pageInfo.firstPage}</Pagination.Item>
                        <Pagination.Ellipsis disabled/>
                        <Pagination.Item
                            onClick={() => handlePageClick(pageInfo.middlePage)}
                            active={pageInfo.middlePage === pageInfo.currentPage}>{pageInfo.middlePage}</Pagination.Item>
                        <Pagination.Ellipsis disabled/>
                        <Pagination.Item
                            onClick={() => handlePageClick(pageInfo.lastPage)}
                            active={pageInfo.lastPage === pageInfo.currentPage}>{pageInfo.lastPage}</Pagination.Item>
                        <Pagination.Next
                            onClick={() => handlePageClick(pageInfo.currentPage + 1)}
                            disabled={pageInfo.currentPage >= pageInfo.lastPage}
                        />
                        <Pagination.Last
                            onClick={() => handlePageClick(pageInfo.lastPage)}
                        />
                    </Pagination>}
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    {pageInfo.pageSize} books/page; total: {pageInfo.totalElements} books
                </Col>
            </Row>
        </Container>
    );
};

export default PageFooter;