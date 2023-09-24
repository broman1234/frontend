import React from 'react';
import {Table} from "react-bootstrap";
import Banner from "../../banner/Banner";
import SearchArea from "./components/SearchArea";
import useBookTable from "./actions/useBookTable";
import PageFooter from "./components/PageFooter";
import BookInfoModal from "./components/BookInfoModal";
import Button from "react-bootstrap/Button";

const BookTable = ({setBooks, books}) => {

    const {
        bannerMessage,
        bannerStyle,
        isShowBookTableErrorBanner,
        bookRequest,
        setBookRequest,
        pageInfo,
        handlePageClick,
        fetchBooks,
        sortField,
        sortOrder,
        handleSort,
        isShowBookInfoModal,
        setIsShowBookInfoModal,
        openBookInfoModal,
        currentBook,
        setCurrentBook
    } = useBookTable(setBooks, books);

    return (
        <Banner isShowBanner={isShowBookTableErrorBanner} bannerStyle={bannerStyle} bannerMessage={bannerMessage}>
            <SearchArea bookRequest={bookRequest} setBookRequest={setBookRequest} fetchBooks={fetchBooks}/>
            <Table striped bordered hover className="mt-3">
                <thead>
                <tr>
                    <th>#</th>
                    <th onClick={() => handleSort('title')}>
                        <div className="d-flex justify-content-between">
                            Title {sortField === 'title' && (sortOrder === 'asc' ? <span>▲</span> : <span>▼</span>)}
                        </div>
                    </th>
                    <th onClick={() => handleSort('author')}>
                        <div className="d-flex justify-content-between">
                            Author {sortField === 'author' && (sortOrder === 'asc' ? <span>▲</span> : <span>▼</span>)}
                        </div>
                    </th>
                    <th onClick={() => handleSort('category')}>
                        <div className="d-flex justify-content-between">
                            Category {sortField === 'category' && (sortOrder === 'asc' ? <span>▲</span> :
                            <span>▼</span>)}
                        </div>
                    </th>
                    <th onClick={() => handleSort('publisher')}>
                        <div className="d-flex justify-content-between">
                            Publisher {sortField === 'publisher' && (sortOrder === 'asc' ? <span>▲</span> :
                            <span>▼</span>)}
                        </div>
                    </th>
                    <th className="col-3">
                        Operations
                    </th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => {
                    let bookIndex = books.indexOf(book);
                    return (<tr key={bookIndex}>
                        <td>{bookIndex + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.category}</td>
                        <td>{book.publisher}</td>
                        <td>
                            <Button
                                className="mx-1"
                                onClick={() => openBookInfoModal(book)}
                            >
                                View
                            </Button>
                            <Button>Delete</Button>
                        </td>

                    </tr>)
                })}
                </tbody>
            </Table>
            <PageFooter pageInfo={pageInfo} handlePageClick={handlePageClick}/>
            {isShowBookInfoModal && <BookInfoModal isOpen={isShowBookInfoModal}
                           setIsShowBookInfoModal={setIsShowBookInfoModal}
                           currentBook={currentBook}
                           setCurrentBook={setCurrentBook}
            />}
        </Banner>

    );
};

export default BookTable;