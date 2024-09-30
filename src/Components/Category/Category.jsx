import React, { useState, useEffect } from "react";
import { fetchData } from "../../api"; 
import { Link } from "react-router-dom"; 

function Category() {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);

    const handleToggleCategories = () => {
        setShowCategories(!showCategories);
    };

    useEffect(() => {
        const categoriesURL = import.meta.env.VITE_CATEGORI_URL;
        const loadCategories = async () => {
            try {
                const data = await fetchData(categoriesURL);
                console.log(data)
                setCategories(data);
            } catch (error) {
                console.error("Loading categories failed:", error);
            }
        };
        loadCategories();
    }, []);

    return (
        <div className="category-nav">
            <button className="category-button" onClick={handleToggleCategories}>
                {showCategories ? "Hide Categories" : "Show Categories"}
            </button>
            {showCategories && (
                <ul className="categori-list">
                    {categories.map((category, index) => (
                        <li key={index} className="category-item">
                            <Link to={`/categories/${category.id}`}>{category.name} : {category.count}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Category;