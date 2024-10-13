import React, { useState, useEffect } from "react";
import {FaBars} from 'react-icons/fa';
import { Link } from "react-router-dom"; 

function Category({categories}) {
    const [showCategories, setShowCategories] = useState(false);

    const filteredCategories = categories.slice(0,10)

    const handleToggleCategories = () => {
        setShowCategories(!showCategories);
    };

    return (
        <>
            <div className="navbar"> 
             <button className="category-button" onClick={handleToggleCategories}>
             {showCategories ? "Hide" : "Categories"}
             </button>   
           {showCategories && (
                <ul className="categori-list">
                    {filteredCategories.map((category, index) => (
                        <li key={index} className="category-item">
                            <Link to={`/categories/${category.name}`}>{category.name} : {category.count}</Link>
                        </li>
                    ))}
                </ul>
            )}
            </div>

            <div className="mobile-navbar">
            <button className="mobile_category-button" onClick={handleToggleCategories}>
            {showCategories?"X": <FaBars />}
            </button>

           {showCategories && (
                <ul className="categori-list">
                    {filteredCategories.map((category, index) => (
                        <li key={index} className="category-item">
                            <Link to={`/categories/${category.name}`}>{category.name} : {category.count}</Link>
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </>
        
    );
}

export default Category;





