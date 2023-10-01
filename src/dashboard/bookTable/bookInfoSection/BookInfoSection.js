import React from 'react';
import BookInfoModal from "./BookInfoModal";
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
                style={{backgroundColor: "#d0bdf4", color: "black", borderColor: "white"}}
            >
                View
            </Button>
            {isShowBookInfoModal && (
                <BookInfoModal
                    isOpen={isShowBookInfoModal}
                    setIsOpen={setIsShowBookInfoModal}
                    currentBook={currentBook}
                    setCurrentBook={setCurrentBook}
                    books={books}
                    setBooks={setBooks}
                />
            )}
        </>
    );
};

export default BookInfoSection;