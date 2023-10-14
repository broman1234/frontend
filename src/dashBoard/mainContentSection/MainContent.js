import React from 'react';
import CategorySection from "./bookCategorySection/CategorySection";
import PopularityRankSection from "./popularityRankSection/PopularityRankSection";

const MainContent = () => {
    return (
        <div className="main-content-container">
            <div className="main-content">
                <CategorySection />
                <PopularityRankSection />
            </div>
        </div>
    );
};

export default MainContent;