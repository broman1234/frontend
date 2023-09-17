import React, {useContext, useEffect, useState} from 'react';
import {Col, Pagination, Row, Table} from "react-bootstrap";
import useUser from "../../../authentication/useUser";
import {BannerContext} from "../../../banner/BannerProvider";
import Banner from "../../../banner/Banner";

const BookTable = ({setBooks, books}) => {

    const user = useUser();
    const {setBannerStyle, setBannerMessage, bannerMessage, bannerStyle} = useContext(BannerContext);
    const [isShowBookTableErrorBanner, setIsShowBookTableErrorBanner] = useState(false);
    const [pageInfo, setPageInfo] = useState({
        "firstPage": 1,
        "lastPage": null,
        "totalElements": null,
        "pageSize": null
    })

    const fetchBooks = () => {
        fetch("api/admin/books", {
            headers: {
                "Authorization": "Bearer " + user.jwt
            },
            method: "get"
        })
            .then((response) =>
                response.json()
            )
            .then(data => {
                setBooks(data.content);
                setPageInfo({
                    ...pageInfo,
                    "lastPage": data.totalPages,
                    "totalElements": data.totalElements,
                    "pageSize": data.size,
                })
            })
            .catch(() => {
                setIsShowBookTableErrorBanner(true);
                setBannerStyle('danger');
                setBannerMessage("The server has some error. Please try again");
            })
    }

    useEffect(fetchBooks, [setBannerMessage, setBannerStyle, setBooks, user.jwt]);


    return (
        <Banner isShowBanner={isShowBookTableErrorBanner} bannerStyle={bannerStyle} bannerMessage={bannerMessage}>
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
            <Row>
                <Col className="d-flex justify-content-center">
                    {pageInfo.lastPage < 10 ? <Pagination>
                        {[...Array(pageInfo.lastPage).keys()].map(
                            pageNumber => <Pagination.Item>{pageNumber + 1}</Pagination.Item>
                        )}
                    </Pagination> : <Pagination>
                        <Pagination.First/>
                        <Pagination.Prev/>
                        <Pagination.Item>{pageInfo.firstPage}</Pagination.Item>
                        <Pagination.Ellipsis/>
                        <Pagination.Item>{Math.floor((pageInfo.firstPage + pageInfo.lastPage) / 2)}</Pagination.Item>
                        <Pagination.Ellipsis/>
                        <Pagination.Item>{pageInfo.lastPage}</Pagination.Item>
                        <Pagination.Next/>
                        <Pagination.Last/>
                    </Pagination>}
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                {pageInfo.pageSize} books/page; total: {pageInfo.totalElements} books
            </Row>
        </Banner>

    );
};

export default BookTable;