import {useCallback, useContext, useEffect, useState} from "react";
import {BannerContext} from "../../../banner/BannerProvider";
import {UserContext} from "../../../authentication/userProvider";

const useBookInfoModal = (setIsOpen, currentBook, setCurrentBook, books, setBooks) => {
    const {validateAndRefreshJwt} = useContext(UserContext);
    const [isShowSubmitConfirmationPopup, setIsShowSubmitConfirmationPopup] = useState(false);
    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const [editedBook, setEditedBook] = useState({
        title: "",
        author: "",
        category: "",
        publisher: "",
        description: ""
    });
    const {
        setBannerStyle,
        setBannerMessage,
        setIsShowBookTableErrorBanner,
        setIsShowBookTableSuccessBanner
    } = useContext(BannerContext);
    const [fetchBookInfoErrorMessage, setFetchBookInfoErrorMessage] = useState("");

    const closeBookInfoModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen])

    const openSubmitConfirmationPopup = useCallback(() => {
        setIsShowSubmitConfirmationPopup(true);
    }, [setIsShowSubmitConfirmationPopup]);

    const closeSubmitConfirmationPopup = useCallback(() => {
        setIsShowSubmitConfirmationPopup(false);
    }, [setIsShowSubmitConfirmationPopup])

    const handleSubmit = useCallback(async () => {
        const validJwt = await validateAndRefreshJwt();
        fetch(`api/admin/books/${currentBook.id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + validJwt
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
            setIsShowBookTableSuccessBanner(true);
            setBannerMessage("You've updated the book info successfully!");
            setBannerStyle('success');
            setTimeout(() => {
                setIsShowBookTableSuccessBanner(false);
            }, 5000);
        }).catch(() => {
            setIsShowBookTableErrorBanner(true);
            setBannerMessage("Edit book info failed, please try again later");
            setBannerStyle('danger');
            setTimeout(() => {
                setIsShowBookTableErrorBanner(false);
            }, 5000);
        }).finally(() => {
                closeBookInfoModal();
            }
        )
    }, [books, closeBookInfoModal, currentBook.id, editedBook, setBooks])

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

    const getBookInfoApi = useCallback((validJwt) => {
        fetch(`api/admin/books/${currentBook.id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + validJwt
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
            .catch(() => {
                    setCurrentBook({
                        ...currentBook,
                        title: "",
                        author: "",
                        category: "",
                        publisher: "",
                        description: ""
                    });
                    setFetchBookInfoErrorMessage("Unable to fetch book information, please try again later");
                }
            )
    }, [setCurrentBook])


    useEffect(() => {
            async function fetchData() {
                const validJwt = await validateAndRefreshJwt();
                getBookInfoApi(validJwt);
            }

            fetchData().then(() => {
            });
        }, [currentBook.id, getBookInfoApi, setCurrentBook, validateAndRefreshJwt]
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
        closeSubmitConfirmationPopup,
        fetchBookInfoErrorMessage
    }
}

export default useBookInfoModal