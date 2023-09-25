import React from 'react';
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";

const SubmitConfirmationPopup = ({isOpen, handleSubmit, closePopup}) => {
    return (
        <>
            <Modal show={isOpen} >
                <Modal.Header>
                    <Modal.Title>Submission confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to submit this change?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closePopup}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SubmitConfirmationPopup;