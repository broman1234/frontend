import React from 'react';
import {Form} from "react-bootstrap";

const BookDeleteSection = () => {
    return (
        <>
            <Form.Check
                type='radio'
                id='delete-radio'
                label='delete'
            />
        </>
    );
};

export default BookDeleteSection;