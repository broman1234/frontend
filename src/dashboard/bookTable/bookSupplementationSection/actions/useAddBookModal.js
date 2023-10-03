import {useCallback, useContext, useEffect, useState} from "react";
import useValidateAndRefreshJwt from "../../../../authentication/useValidateAndRefreshJwt";
import {BannerContext} from "../../../../banner/BannerProvider";

const useAddBookModal = (hideAddBookModal, setBooks, books, fetchBooks) => {
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
    const [fetchedCategories, setFetchedCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const fetchCategories = useCallback(() => {
        fetch("api/admin/books/categories", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + user.jwt
            },
            method: "get"
        }).then(response => {
            if (response.status === 200) {
                return Promise.all([response.json()]);
            } else {
                return Promise.reject("Cannot fetch categories");
            }
        }).then(([body]) => {
            setFetchedCategories(body);
        }).catch((message) => {
            alert(message);})
    }, [user.jwt])

    useEffect(() => {
            validateAndRefreshJwt();
            fetchCategories();
    }
        , [fetchCategories, validateAndRefreshJwt])

    const updateSelectedCategory = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    }

    const getButtonTitle = () => {
        return selectedCategory;
    }

    const submitNewBook = () => {
        const reqBody = {
            "title": bookInfo.title,
            "author": bookInfo.author,
            "category": selectedCategory,
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
            .then(() => {
                fetchBooks();
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
    return {
        submitNewBook,
        bookInfo,
        setBookInfo,
        addBookErrorMessage,
        fetchedCategories,
        updateSelectedCategory,
        getButtonTitle
    }
}

export default useAddBookModal