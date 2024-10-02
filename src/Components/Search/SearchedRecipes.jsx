import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

const SearchedRecipes = ({ recipes, query }) => {
    const recipesList = recipes.allRecipes || [];

    const filteredRecipes = recipesList.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase()) ||
        recipe.categories.some(category => category.toLowerCase().includes(query.toLowerCase())) 
    );

    return (
        <div className="search-recipes">
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map(recipe => (
                    <RecipeCard
                        key={recipe._id}
                        image={recipe.imageUrl}
                        name={recipe.title}
                        description={recipe.description}
                        rating={recipe.avgRating}
                        categories={recipe.categories}
                        timeInMins={recipe.timeInMins}
                    />
                ))
            ) : (
                <p>No recipes found</p>
            )}
        </div>
    );
};

export default SearchedRecipes;