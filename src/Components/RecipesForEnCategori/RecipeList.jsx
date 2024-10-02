import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.css'

const RecipeList =({recipesList}) => {
    const addRecipeCards = (recipes) =>{
        return recipesList.map(recipe =>{
            return(
                <RecipeCard
                key={recipe._id}
                image={recipe.imageUrl}
                name={recipe.title}
                description={recipe.description}
                rating={recipe.avgRating}
                categories={recipe.categories}
                timeInMins={recipe.timeInMins}
                />
            )
        });           
    }
    return (
        <div className='recipe-list'>
            {addRecipeCards(recipesList)}
        </div>
    )
}

export default RecipeList;