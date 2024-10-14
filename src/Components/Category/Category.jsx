import React, { useState, useEffect } from "react";
import {FaBars} from 'react-icons/fa';
import { Link } from "react-router-dom"; 
import "./Category.css"

function Category({categories}) {

    const [showCategories, setShowCategories] = useState(false);

    const filteredCategories = categories.slice(0,10)

    const toggleSidebar = () => {
        setShowCategories(!showCategories);
    };

    return (
        <>
            <div className="container">
                <button onClick={toggleSidebar} className="sidebar-toggle">
                    Kategorier
                </button>

                <div className={`sidebar ${showCategories ? 'active' : ''}`}>
                    {filteredCategories.map((category,index) =>(
                        <Link className="category-item" key={index} to={`/categories/${category.name}`} onClick={toggleSidebar}>{category.name} : {category.count}</Link>
                    ))}
                </div>
             </div>

            {/* </div> */}

            
            
                {/* <div className="mobile-navbar">
                   <button className="mobile_category-button" >
                       <FaBars />
                          <div className="category-content">
                              {filteredCategories.map((category, index) => (
                                <Link className = "category-item" key={index} to={`/categories/${category.name}`}>{category.name} : {category.count}</Link>  
                        ))}
                    </div>
                   </button>
                </div> */}

        </>
        
    );
}

export default Category;












