import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Pagination, Row, Table} from "react-bootstrap";
import useUser from "../../../authentication/useUser";
import {BannerContext} from "../../../banner/BannerProvider";
import Banner from "../../../banner/Banner";
import SearchArea from "../../searcharea";

const BookTable = ({setBooks, books}) => {

    const user = useUser();
    const {setBannerStyle, setBannerMessage, bannerMessage, bannerStyle} = useContext(BannerContext);
    const [isShowBookTableErrorBanner, setIsShowBookTableErrorBanner] = useState(false);
    const [bookRequest, setBookRequest] = useState({
        title: "",
        author: "",
        category: "",
        publisher: "",
    });

    const [pageInfo, setPageInfo] = useState({
        "firstPage": 1,
        "lastPage": 0,
        "middlePage": 0,
        "totalElements": 0,
        "pageSize": 0,
        "currentPage": 1,
    })

    const handlePageClick = (pageNumber) => {
        setPageInfo({
            ...pageInfo,
            currentPage: pageNumber
        });
    };

    const fetchBooks = () => {
        const queryParams = new URLSearchParams();
        queryParams.append("page", (pageInfo.currentPage - 1).toString());
        queryParams.append("title", bookRequest.title);
        queryParams.append("author", bookRequest.author);
        queryParams.append("category", bookRequest.category);
        queryParams.append("publisher", bookRequest.publisher);
        fetch(`api/admin/books?${queryParams.toString()}`, {
            headers: {
                "Authorization": "Bearer " + user.jwt
            },
            method: "get"
        })
            .then((response) =>{
                    console.log("response: ========", response);
                    return response.json()
            }

            )
            .then(data => {
                setBooks(data.content);
                setPageInfo({
                    ...pageInfo,
                    "lastPage": data.totalPages,
                    "middlePage": Math.floor((1 + data.totalPages) / 2),
                    "totalElements": data.totalElements,
                    "pageSize": data.size
                })
            })
            .catch(() => {
                setIsShowBookTableErrorBanner(true);
                setBannerStyle('danger');
                setBannerMessage("The server has some error. Please try again");
            })
    }

    useEffect(fetchBooks, [pageInfo.currentPage, setBannerMessage, setBannerStyle, setBooks, user.jwt, books.length]);


    return (
        <Banner isShowBanner={isShowBookTableErrorBanner} bannerStyle={bannerStyle} bannerMessage={bannerMessage}>
            <SearchArea bookRequest={bookRequest} setBookRequest={setBookRequest} fetchBooks={fetchBooks}/>
            <Table striped bordered hover className="mt-3">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Publisher</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => {
                    let bookIndex = books.indexOf(book);
                    return (
                        <tr key={bookIndex}>
                            <td>{bookIndex + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.category}</td>
                            <td>{book.publisher}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            <Container className="fixed-footer">
                <Row>
                    <Col className="d-flex justify-content-center">
                        {pageInfo.lastPage < 10 ? <Pagination>
                            {[...Array(pageInfo.lastPage).keys()].map(
                                pageNumber =>
                                    <Pagination.Item key={pageNumber}
                                                     onClick={() => handlePageClick(pageNumber + 1)}
                                                     active={pageNumber + 1 === pageInfo.currentPage}>{pageNumber + 1}
                                    </Pagination.Item>
                            )}
                        </Pagination> : <Pagination>
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
        </Banner>

    );
};

export default BookTable;