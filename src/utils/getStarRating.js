import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar as farStar} from "@fortawesome/free-regular-svg-icons";
import React from "react";

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

export default getStarRating;