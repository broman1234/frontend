import {useContext, useEffect, useState} from "react";
import useValidateAndRefreshJwt from "../../../authentication/useValidateAndRefreshJwt";
import {BannerContext} from "../../../banner/BannerProvider";

const useAddBookModal = (hideAddBookModal, setBooks, books) => {
    const {validateAndRefreshJwt, user} = useValidateAndRefreshJwt()
    const [bookInfo, setBookInfo] = useState({
        title: "",
        author: "",
        category: "",
        publisher: "",
        description: ""
    })
    const [addBookErrorMessage, setAddBookErrorMessage] = useState("");
    const {setBannerStyle, setBannerMessage, setIsShowBookTableSuccessBanner} = useContext(BannerContext);

    useEffect(validateAndRefreshJwt, [validateAndRefreshJwt])

    const submitNewBook = () => {
        const reqBody = {
            "title": bookInfo.title,
            "author": bookInfo.author,
            "category": bookInfo.category,
            "publisher": bookInfo.publisher,
            "description": bookInfo.description
        };

        fetch("api/admin/books", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + user.jwt
            },
            method: "post",
            body: JSON.stringify(reqBody)
        })
            .then((response) => {
                if (response.status !== 201) {
                    return Promise.reject(response);
                }
                return response.json();
            })
            .then(book => {
                setBooks([...books, book]);
                setIsShowBookTableSuccessBanner(true);
                setBannerStyle("success");
                setBannerMessage("You've just added a book successfully!");
                setTimeout(() => {
                    setIsShowBookTableSuccessBanner(false);
                }, 5000);
                setAddBookErrorMessage("");
                hideAddBookModal()
            })
            .catch((error) => {
               error.text().then(errorMessage => {
                   setAddBookErrorMessage(errorMessage);
               })
            })
    }
    return {submitNewBook, bookInfo, setBookInfo, addBookErrorMessage}
}

export default useAddBookModal