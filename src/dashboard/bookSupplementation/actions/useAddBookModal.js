import {useState} from "react";
import useUser from "../../../authentication/useUser";

const useAddBookModal = (hideAddBookModal, setIsAddBookSuccessBannerOpen) => {
    const user = useUser()
    console.log("jwt has been updated in addBookModal=====================", user.jwt)
    const [bookInfo, setBookInfo] = useState({
        title: "",
        author: "",
        category: "",
        publisher: ""
    })


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