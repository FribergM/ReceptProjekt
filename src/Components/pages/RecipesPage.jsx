import React from "react";
import { useParams } from "react-router-dom";

function RecipesPage({recipes}) {
    const { recipeId } = useParams(); 
    if (!recipes || recipes.length === 0) {
        return <p>Laddar recept...</p>;
    }
    const recipe = recipes.find(recipe => recipe._id === recipeId);
    return (
        <div>
            <img src={`${import.meta.env.VITE_PUBLIC_URL}/images/${recipe.imageUrl}`} alt={recipe.title}/>
            <h1>{recipe.title}</h1>
        </div>
    )
    
}

export default RecipesPage;