import React from 'react';
import {Table} from "react-bootstrap";
import Banner from "../../../banner/Banner";
import SearchArea from "./SearchArea";
import useBookTable from "../actions/useBookTable";
import PageFooter from "./PageFooter";

const BookTable = ({setBooks, books}) => {

    const {
        bannerMessage,
        bannerStyle,
        isShowBookTableErrorBanner,
        bookRequest,
        setBookRequest,
        pageInfo,
        handlePageClick,
        fetchBooks
    } = useBookTable(setBooks, books);

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
            <PageFooter pageInfo={pageInfo} handlePageClick={handlePageClick}/>
        </Banner>

    );
};

export default BookTable;