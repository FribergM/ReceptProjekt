import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function Category({categories}) {
    const [showCategories, setShowCategories] = useState(false);

    const handleToggleCategories = () => {
        setShowCategories(!showCategories);
    };

    return (
        <div className="category-nav">
            <button className="category-button" onClick={handleToggleCategories}>
                {showCategories ? "Hide" : "Categories"}
            </button>
            {showCategories && (
                <ul className="categori-list">
                    {categories.map((category, index) => (
                        <li key={index} className="category-item">
                            <Link to={`/categories/${category.name}`}>{category.name} : {category.count}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Category;