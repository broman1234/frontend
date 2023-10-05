import React from 'react';
import CategorySection from "./bookCategorySection/CategorySection";

const MainContent = () => {
    return (
        <div className="main-content-container">
            <div className="main-content">
                <CategorySection />
            </div>
        </div>
    );
};

export default MainContent;