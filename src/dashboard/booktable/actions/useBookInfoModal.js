import {useCallback, useEffect, useState} from "react";
import useValidateAndRefreshJwt from "../../../authentication/useValidateAndRefreshJwt";

const useBookInfoModal = (setIsOpen, currentBook, setCurrentBook, books, setBooks) => {
    const {validateAndRefreshJwt, user} = useValidateAndRefreshJwt();
    const [isShowSubmitConfirmationPopup, setIsShowSubmitConfirmationPopup] = useState(false);

    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const [editedBook, setEditedBook] = useState({
        title: "",
        author: "",
        category: "",
        publisher: "",
        description: ""
    });

    const closeBookInfoModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen])

    const openSubmitConfirmationPopup = useCallback(() => {
        setIsShowSubmitConfirmationPopup(true);
    }, [setIsShowSubmitConfirmationPopup]);

    const closeSubmitConfirmationPopup = useCallback(() => {
        setIsShowSubmitConfirmationPopup(false);
    }, [setIsShowSubmitConfirmationPopup])

    const handleSubmit = useCallback(() => {
        fetch(`api/admin/books/${currentBook.id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + user.jwt
            },
            method: "put",
            body: JSON.stringify({...editedBook, id: currentBook.id})
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then(updatedBook => {
            const updatedBooks = books.map(book => (book.id === updatedBook.id ? updatedBook : book));
            setBooks(updatedBooks);
            closeBookInfoModal();
        }).catch(
            // TODO: deal with exception
        )
    }, [books, closeBookInfoModal, currentBook.id, editedBook, setBooks, user.jwt])

    const handleEdit = () => {
        setIsEditEnabled(true);
    }

    const cancelEditing = () => {
        setIsEditEnabled(false);
        setEditedBook({
            id: 0,
            title: "",
            author: "",
            category: "",
            publisher: "",
            description: ""
        })
    }


    useEffect(
        () => {
            validateAndRefreshJwt();
            fetch(`api/admin/books/${currentBook.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.jwt
                },
                method: "get",
            }).then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return Promise.reject(response)
                }
            }).then(book => {
                setCurrentBook({...book});
            })
                .catch(
                    //Todo: deal with exception
                )
        }, [currentBook.id, setCurrentBook, user.jwt]
    )

    return {
        closeBookInfoModal,
        isEditEnabled,
        handleEdit,
        editedBook,
        setEditedBook,
        cancelEditing,
        handleSubmit,
        isShowSubmitConfirmationPopup,
        openSubmitConfirmationPopup,
        closeSubmitConfirmationPopup
    }
}

export default useBookInfoModal