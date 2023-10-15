import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../../../authentication/userProvider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar as farStar} from "@fortawesome/free-regular-svg-icons";

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

    const getStarRating = (rating) => {
        const fullStars = Math.floor((rating / 10) * 5); // 计算满分十分中的实心星星数量
        const hasHalfStar =(rating / 10) * 5 % 1 === 0.5; // 如果小数部分是0.5，表示有半个实心星星
        const starIcons = [];
        for (let i = 0; i < fullStars; i++) {
            starIcons.push(<FontAwesomeIcon key={i} icon={faStar} />);
        }
        if (hasHalfStar) {
            starIcons.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} />);
        }
        // 如果星星总数不够 5，添加剩余的空心星星
        while (starIcons.length < 5) {
            starIcons.push(<FontAwesomeIcon key={`empty${starIcons.length}`} icon={farStar} />);
        }
        return starIcons;
    }

    return {booksByPopularityRank, getStarRating};
}

export default usePopularityRankSection