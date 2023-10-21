import React from 'react';
import CategorySection from "./bookCategorySection/CategorySection";
import PopularityRankSection from "./popularityRankSection/PopularityRankSection";
import RatingRankSection from "./ratingRankSection/RatingRankSection";

const MainContent = () => {
    return (
        <div className="main-content-container">
            <div className="main-content">
                <CategorySection />
                <PopularityRankSection />
                <RatingRankSection />
            </div>
        </div>
    );
};

export default MainContent;