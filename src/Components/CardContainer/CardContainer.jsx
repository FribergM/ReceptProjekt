import React from "react";
// import RecipeCard from "../RecipeCard/RecipeCard";
import { useEffect } from "react";

function CardContainer() {
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
    return <div className ="card-container">
        {categories.map((category,index) => (<div key ={index} className="category-card">
            <h2>{category.name}</h2>
        </div>))}
        
    </div>
}

export default CardContainer;