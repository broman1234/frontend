import {useContext, useEffect, useState} from "react";
import useValidateAndRefreshJwt from "../../../authentication/useValidateAndRefreshJwt";
import {BannerContext} from "../../../banner/BannerProvider";

const useAddBookModal = (hideAddBookModal, setBooks, books) => {
    const {validateAndRefreshJwt, user} = useValidateAndRefreshJwt()
    const [bookInfo, setBookInfo] = useState({
        title: "",
        author: "",
        category: "",
        publisher: ""
    })
    const {setIsShowBanner, setBannerStyle, setBannerMessage} = useContext(BannerContext);

    useEffect(validateAndRefreshJwt, [validateAndRefreshJwt])

    const submitNewBook = () => {
        const reqBody = {
            "title": bookInfo.title,
            "author": bookInfo.author,
            "category": bookInfo.category,
            "publisher": bookInfo.publisher
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
                const updatedBooks = [...books, book];
                setBooks(updatedBooks);
                setIsShowBanner(true);
                setBannerStyle("success");
                setBannerMessage("You've just added a book successfully!");
                setTimeout(() => {
                    setIsShowBanner(false);
                }, 5000);
                hideAddBookModal()
            })
            .catch((error) => {
               error.text().then(errorMessage => {
                   setIsShowBanner(true);
                   setBannerStyle('danger');
                   setBannerMessage(errorMessage);
                   setTimeout(() => {
                       setIsShowBanner(false);
                   }, 5000);
               })
            })
    }
    return {submitNewBook, bookInfo, setBookInfo}
}

export default useAddBookModal