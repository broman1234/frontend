import {useContext, useEffect, useState} from "react";
import {BannerContext} from "../../../banner/BannerProvider";
import {UserContext} from "../../../authentication/userProvider";

const useBookTable = (setBooks, books) => {
    const {validateAndRefreshJwt, jwt} = useContext(UserContext);
    const {
        setBannerStyle, setBannerMessage, bannerMessage, bannerStyle,
        isShowBookTableErrorBanner,
        setIsShowBookTableErrorBanner,
        isShowBookTableSuccessBanner,
        setIsShowBookTableSuccessBanner
    } = useContext(BannerContext);
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

    const submitDeleteBooks = async (deletedBookIds) => {
        const validJwt = await validateAndRefreshJwt();
        fetch(`api/admin/books/${deletedBookIds.join(',')}`, {
            headers: {
                "Authorization": "Bearer " + validJwt
            },
            method: "delete",
        }).then(response => {
            if (response.status === 200) {
                fetchBooks(validJwt);
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

    const fetchBooks = (validJwt) => {
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
                "Authorization": "Bearer " + validJwt
            },
            method: "get"
        })
            .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        return Promise.reject(response);
                    }
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
            .catch((response) => {
                if (response.status !== 403) {
                    setIsShowBookTableErrorBanner(true);
                    setBannerStyle('danger');
                    setBannerMessage("The server has some error. Please try again");
                    setTimeout(() => {
                        setIsShowBookTableErrorBanner(false);
                    }, 5000);
                }
            })
    }

    useEffect(() => fetchBooks(jwt), [pageInfo.currentPage, setBannerMessage, setBannerStyle, setBooks, jwt]);

    return {
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