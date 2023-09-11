import {useEffect, useState} from "react";
import useValidateAndRefreshJwt from "../../../authentication/useValidateAndRefreshJwt";

const useAddBookModal = (hideAddBookModal, setIsAddBookSuccessBannerOpen) => {
    const {validateAndRefreshJwt, user} = useValidateAndRefreshJwt()
    const [bookInfo, setBookInfo] = useState({
        title: "",
        author: "",
        category: "",
        publisher: ""
    })
    console.log("jwt has been updated in addBookModal=====================", user.jwt)

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
                if (response.status === 201) {
                    setIsAddBookSuccessBannerOpen(true);

                    setTimeout(() => {
                        setIsAddBookSuccessBannerOpen(false);
                    }, 5000);
                }
            }).catch((message) => {

            }).finally(
            hideAddBookModal()
        );
    }
    return {submitNewBook, bookInfo, setBookInfo}
}

export default useAddBookModal