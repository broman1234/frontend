import React from 'react';
import BookInfoModal from "../components/BookInfoModal";
import Button from "react-bootstrap/Button";
import useBookInfoSection from "./useBookInfoSection";

const BookInfoSection = ({book, books, setBooks}) => {

    const {
        isShowBookInfoModal,
        setIsShowBookInfoModal,
        openBookInfoModal,
        currentBook,
        setCurrentBook
    } = useBookInfoSection();

    return (
        <>
            <Button
                className="mx-1"
                onClick={() => openBookInfoModal(book)}
            >
                View
            </Button>
            {isShowBookInfoModal && <BookInfoModal isOpen={isShowBookInfoModal}
                                                   setIsOpen={setIsShowBookInfoModal}
                                                   currentBook={currentBook}
                                                   setCurrentBook={setCurrentBook}
                                                   books={books} setBooks={setBooks}
            />}
        </>
    );
};

export default BookInfoSection;