import {useEffect, useState} from "react";
import useValidateAndRefreshJwt from "../../../authentication/useValidateAndRefreshJwt";

const useBookInfoModal = (isOpen, setIsShowBookInfoModal, currentBook, setCurrentBook) => {
    const {validateAndRefreshJwt, user} = useValidateAndRefreshJwt()

    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const [editedBook, setEditedBook] = useState({
        id: 0,
        title: "",
        author: "",
        category: "",
        publisher: ""
    });

    const closeBookInfoModal = () => {
        setIsShowBookInfoModal(false);
    }

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
            publisher: ""
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
        }, [currentBook.id, setCurrentBook, user.jwt, validateAndRefreshJwt]
    )

    return {
        closeBookInfoModal,
        isEditEnabled,
        handleEdit,
        editedBook,
        setEditedBook,
        cancelEditing
    }
}

export default useBookInfoModal