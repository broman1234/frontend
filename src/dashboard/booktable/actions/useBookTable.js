import useUser from "../../../authentication/useUser";
import {useContext, useEffect, useState} from "react";
import {BannerContext} from "../../../banner/BannerProvider";

const useBookTable = (setBooks, books) => {
    const user = useUser();
    const {setBannerStyle, setBannerMessage, bannerMessage, bannerStyle} = useContext(BannerContext);
    const [isShowBookTableErrorBanner, setIsShowBookTableErrorBanner] = useState(false);
    const [bookRequest, setBookRequest] = useState({
        title: "",
        author: "",
        category: "",
        publisher: "",
    });
    const [pageInfo, setPageInfo] = useState({
        "firstPage": 1,
        "lastPage": 0,
        "middlePage": 0,
        "totalElements": 0,
        "pageSize": 0,
        "currentPage": 1,
    })
    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [isShowEditBookModal, setIsShowEditBookModal] = useState(false);

    const openShowEditBookModal = () => {
        setIsShowEditBookModal(true);
    }

    const handleSort = (field) => {
        const sortedBooks = [...books].sort((a, b) => {
            if (a[field] < b[field]) return  -1;
            if (a[field] > b[field]) return 1;
            return 0;
        });
        if (sortField !== field) {
            setSortField(field);
            setSortOrder('asc');
        } else if (sortOrder === 'asc') {
            sortedBooks.reverse();
            setSortOrder('desc');
        } else {
            setSortOrder('asc');
        }
        setBooks(sortedBooks);
    }

    const handlePageClick = (pageNumber) => {
        setPageInfo({
            ...pageInfo,
            currentPage: pageNumber
        });
    };

    const fetchBooks = () => {
        setSortField(null);
        setSortOrder(null);
        const queryParams = new URLSearchParams();
        queryParams.append("page", (pageInfo.currentPage - 1).toString());
        queryParams.append("title", bookRequest.title);
        queryParams.append("author", bookRequest.author);
        queryParams.append("category", bookRequest.category);
        queryParams.append("publisher", bookRequest.publisher);
        fetch(`api/admin/books?${queryParams.toString()}`, {
            headers: {
                "Authorization": "Bearer " + user.jwt
            },
            method: "get"
        })
            .then((response) => {
                    console.log("response: ========", response);
                    return response.json()
                }
            )
            .then(data => {
                setBooks(data.content);
                setPageInfo({
                    ...pageInfo,
                    "lastPage": data.totalPages,
                    "middlePage": Math.floor((1 + data.totalPages) / 2),
                    "totalElements": data.totalElements,
                    "pageSize": data.size
                })
            })
            .catch(() => {
                setIsShowBookTableErrorBanner(true);
                setBannerStyle('danger');
                setBannerMessage("The server has some error. Please try again");
            })
    }

    useEffect(fetchBooks, [pageInfo.currentPage, setBannerMessage, setBannerStyle, setBooks, user.jwt, books.length]);

    return {
        user,
        setBannerStyle,
        setBannerMessage,
        bannerMessage,
        bannerStyle,
        isShowBookTableErrorBanner,
        setIsShowBookTableErrorBanner,
        bookRequest,
        setBookRequest,
        pageInfo,
        setPageInfo,
        handlePageClick,
        fetchBooks,
        sortField,
        sortOrder,
        handleSort,
        isShowEditBookModal,
        setIsShowEditBookModal,
        openShowEditBookModal
    };
}

export default useBookTable