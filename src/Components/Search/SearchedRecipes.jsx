import React,{useState} from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

const SearchedRecipes =
({recipes, query}) => {
    console.log("searched",recipes)
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().incudes(query.toLowerCase())||
        recipe.description.toLowerCase().includes(query.toLowerCase())||
        recipe.categoies.som(category =>category.toLowerCase().includes(query.toLowerCase()))
        );
        return (
            filteredRecipes.length>0 ? (filteredRecipes.map(recipe =>{<RecipeCard 
                key={recipe._id}
                image={recipe.imageUrl}
                name={recipe.title}
                description={recipe.description}
                rating={recipe.avgRating}
                categories={recipe.categories}
                timeInMins={recipe.timeInMins}/>})) : (<p>No recipes found</p>)
            // <div className = "search-recipes">
            //     {filteredRecipes.length>0 ? (filteredRecipes.map(recipe =>{<RecipeCard 
            //     key={recipe._id}
            //     image={recipe.imageUrl}
            //     name={recipe.title}
            //     description={recipe.description}
            //     rating={recipe.avgRating}
            //     categories={recipe.categories}
            //     timeInMins={recipe.timeInMins}/>})) : (<p>No recipes found</p>)
            //     }
            // </div>
        ) 
        
        return(
            <div className = "search-recipes">
                {filteredRecipes(recipes)}
            </div>
        )
}

export default SearchedRecipes;