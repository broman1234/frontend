import {useContext, useEffect, useState} from "react";
import {BannerContext} from "../../../banner/BannerProvider";
import useValidateAndRefreshJwt from "../../../authentication/useValidateAndRefreshJwt";

const useBookTable = (setBooks, books) => {
    const {validateAndRefreshJwt, user} = useValidateAndRefreshJwt();
    const {setBannerStyle, setBannerMessage, bannerMessage, bannerStyle,
        isShowBookTableErrorBanner,
        setIsShowBookTableErrorBanner,
        isShowBookTableSuccessBanner,
        setIsShowBookTableSuccessBanner} = useContext(BannerContext);
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
    const [deletedBookIds, setDeletedBookIds] = useState([]);

    const submitDeleteBooks = (deletedBookIds) => {
        validateAndRefreshJwt();
        fetch(`api/admin/books/${deletedBookIds.join(',')}`, {
            headers: {
                "Authorization": "Bearer " + user.jwt
            },
            method: "delete",
        }).then(response => {
            if (response.status === 200) {
                fetchBooks();
                setIsShowBookTableSuccessBanner(true);
                setBannerStyle("success");
                setBannerMessage("You've just deleted the books successfully!");
                setDeletedBookIds([])
                setTimeout(() => {
                    setIsShowBookTableSuccessBanner(false);
                }, 5000);
            }
        })

    }

    const handleSort = (field) => {
        const sortedBooks = [...books].sort((a, b) => {
            if (a[field] == null && b[field] == null) return 0;
            if (a[field] == null) return 1;
            if (b[field] == null) return -1;

            if (a[field] < b[field]) return -1;
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

    useEffect(fetchBooks, [pageInfo.currentPage, setBannerMessage, setBannerStyle, setBooks, user.jwt]);

    return {
        user,
        setBannerStyle,
        setBannerMessage,
        bannerMessage,
        bannerStyle,
        isShowBookTableErrorBanner,
        isShowBookTableSuccessBanner,
        bookRequest,
        setBookRequest,
        pageInfo,
        setPageInfo,
        handlePageClick,
        fetchBooks,
        sortField,
        sortOrder,
        handleSort,
        deletedBookIds,
        setDeletedBookIds,
        submitDeleteBooks
    };
}

export default useBookTable