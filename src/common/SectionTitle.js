import React from 'react';
import {Link} from "react-router-dom";

const SectionTitle = ({title}) => {
    return (
        <div className="d-flex justify-content-between gap-3 mt-1 section-title">
            <span>
                {title}
            </span>
            <span>
                <Link  to="#" className="view-more-link">view more >></Link>
            </span>
        </div>
    );
};

export default SectionTitle;