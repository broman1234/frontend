import {useEffect, useState} from "react";
import useValidateAndRefreshJwt from "../../../authentication/useValidateAndRefreshJwt";

const useBookInfoModal = (isOpen, setIsShowBookInfoModal, currentBook, setCurrentBook) => {
    const {validateAndRefreshJwt, user} = useValidateAndRefreshJwt()

    const closeBookInfoModal = () => {
        setIsShowBookInfoModal(false);
    }

    const [isEditEnabled, setIsEditEnabled] = useState(false);

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
            }).then(book => setCurrentBook(book))
                .catch(
                    //Todo: deal with exception
                )
        }
    )

    return {
        closeBookInfoModal,
        isEditEnabled
    }
}

export default useBookInfoModal