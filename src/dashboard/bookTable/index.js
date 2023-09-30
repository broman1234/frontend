import React from 'react';
import {Table} from "react-bootstrap";
import Banner from "../../banner/Banner";
import SearchArea from "./bookSearchSection/SearchArea";
import useBookTable from "./actions/useBookTable";
import PageFooter from "./pageFooterSection/PageFooter";
import Button from "react-bootstrap/Button";
import BookInfoSection from "./bookInfoSection/BookInfoSection";
import BookDeleteSection from "./bookDeleteSection/BookDeleteSection";
import BookSupplementation from "./bookSupplementationSection/components/BookSupplementation";

const BookTable = ({setBooks, books}) => {

    const {
        bannerMessage,
        bannerStyle,
        isShowBookTableErrorBanner,
        isShowBookTableSuccessBanner,
        bookRequest,
        setBookRequest,
        pageInfo,
        handlePageClick,
        fetchBooks,
        sortField,
        sortOrder,
        handleSort,
        deletedBookIds,
        setDeletedBookIds,
        submitDeleteBooks
    } = useBookTable(setBooks, books);

    return (
        <div className="banner">
            <Banner isShowErrorBanner={isShowBookTableErrorBanner} isShowSuccessBanner={isShowBookTableSuccessBanner}
                    bannerStyle={bannerStyle} bannerMessage={bannerMessage}>
                <div className="banner-children">
                    <div className="d-flex align-items-center justify-content-between">
                        <SearchArea bookRequest={bookRequest} setBookRequest={setBookRequest} fetchBooks={fetchBooks} />
                        <div className="ms-2"> {/* 在这里添加左边内边距 */}
                            <BookSupplementation setBooks={setBooks} books={books}/>
                        </div>
                    </div>

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
                            <th className="col-1" onClick={() => handleSort('description')}>
                                <div className="d-flex justify-content-between">
                                    Description {sortField === 'description' && (sortOrder === 'asc' ? <span>▲</span> :
                                    <span>▼</span>)}
                                </div>
                            </th>
                            <th className="col-2">
                        <span className="d-flex align-items-center justify-content-between">
                            Operations
                            {deletedBookIds.length > 0 && <span className="d-flex justify-content-end">
                                <Button className="mx-1" size="sm" variant="danger"
                                        onClick={() => submitDeleteBooks(deletedBookIds)}>Delete</Button>
                                <Button size="sm" onClick={() => setDeletedBookIds([])}>Cancel</Button>
                            </span>}
                        </span>
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
                            <span className="overflow">
                                <span>
                                    {book.description}
                                </span>
                            </span>
                                </td>
                                <td className="d-flex justify-content-around">
                                    <BookInfoSection book={book} books={books} setBooks={setBooks}/>
                                    <BookDeleteSection bookId={book.id} deletedBookIds={deletedBookIds}
                                                       setDeletedBookIds={setDeletedBookIds}/>
                                </td>

                            </tr>)
                        })}
                        </tbody>
                    </Table>
                    <PageFooter pageInfo={pageInfo} handlePageClick={handlePageClick}/>
                </div>
            </Banner>
        </div>


    );
};

export default BookTable;