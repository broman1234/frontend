import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../../authentication/userProvider";

const usePopularityRankSection = () => {
    const {jwt} = useContext(UserContext);
    console.log("jwt has been updated in usePopularityRankSection==========", jwt);
    const [booksByPopularityRank, setBooksByPopularityRank] = useState([]);
    const fetchBooksByPopularityRank = (validJwt) => {
        fetch('/api/books/popularity_rank', {
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
        }).then(books => setBooksByPopularityRank(books))
            .catch(() => {});
    }

    useEffect(() => {
        fetchBooksByPopularityRank(jwt)
    }, [jwt])
    return {booksByPopularityRank};
}

export default usePopularityRankSection