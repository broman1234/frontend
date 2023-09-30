import React from 'react';
import {Form} from "react-bootstrap";
import useBookDeleteSection from "./useBookDeleteSection";

const BookDeleteSection = ({bookId, deletedBookIds, setDeletedBookIds}) => {
    const {handleRadioClick} = useBookDeleteSection(deletedBookIds, setDeletedBookIds);

    return (
        <>
            <Form.Check
                type='radio'
                id={bookId}
                label='delete'
                onClick={() => handleRadioClick(bookId)}
                checked={deletedBookIds.includes(bookId)}
                onChange={() => {}}
            />
        </>
    );
};

export default BookDeleteSection;