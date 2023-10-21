import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../../authentication/userProvider";

const useRatingRankSection = () => {
    const {jwt} = useContext(UserContext);
    const [booksByRatingRank, setBooksByRatingRank] = useState([]);

    const fetchBooksByRatingRank = (validJwt) => {
        fetch('/api/books/rating_rank', {
            headers: {
                'Authorization': "Bearer " + validJwt
            },
            method: 'get'
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then(books => setBooksByRatingRank(books.content))
            .catch(() => {});
    }

    useEffect(() => {
        fetchBooksByRatingRank(jwt)
    }, [jwt])

    return {booksByRatingRank};
}

export default useRatingRankSection;