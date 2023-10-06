import React from 'react';
import {Nav} from "react-bootstrap";
import useCategorySection from "./useCategorySection";

const CategorySection = () => {
    const {fetchedCategories} = useCategorySection();

    return (
        <>
            <div className="d-flex gap-3 mt-1">
                <span className="category-title-section">Categories</span>
                <Nav variant="underline" className="custom-nav custom-nav-underline">
                    {
                        fetchedCategories.map(category => <Nav.Item className="custom-nav-item">
                            <Nav.Link >{category}</Nav.Link>
                        </Nav.Item>)
                    }
                </Nav>
            </div>
            <div className="horizontal-line"></div>
        </>
    );
};

export default CategorySection;