import {useCallback, useContext, useEffect, useState} from "react";
import {BannerContext} from "../../../../banner/BannerProvider";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../../../authentication/userProvider";

const useAddBookModal = (hideAddBookModal, setBooks, books, fetchBooks) => {
    const {validateAndRefreshJwt} = useContext(UserContext);
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
    const navigate = useNavigate();

    const fetchCategories = useCallback((validJwt) => {
        fetch("api/admin/books/categories", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + validJwt
            },
            method: "get"
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then((body) => {
            setFetchedCategories([...body]);
        }).catch((error) => {
            if (error.status !== 403) {
                alert("Cannot fetch categories");
            }
        });
    }, [])

    useEffect(() => {
            async function fetchData() {
                const validJwt = await validateAndRefreshJwt();
                fetchCategories(validJwt);
            }

            fetchData().then(() => {});
        }
        , [fetchCategories, navigate, validateAndRefreshJwt])

    const updateSelectedCategory = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    }

    const getButtonTitle = () => {
        return selectedCategory;
    }

    const submitNewBookApi = useCallback((validJwt) => {
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
                "Authorization": "Bearer " + validJwt
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
                fetchBooks(validJwt);
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
                if (error.status !== 403) {
                    error.text().then(errorMessage => {
                        setAddBookErrorMessage(errorMessage);
                    });
                }
            })
    }, [bookInfo.author, bookInfo.description, bookInfo.publisher, bookInfo.title, fetchBooks, hideAddBookModal, selectedCategory, setBannerMessage, setBannerStyle, setIsShowBookTableSuccessBanner]);

    const submitNewBook = useCallback(async () => {
        const validJwt = await validateAndRefreshJwt();
        submitNewBookApi(validJwt);
    }, [submitNewBookApi, validateAndRefreshJwt]);

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