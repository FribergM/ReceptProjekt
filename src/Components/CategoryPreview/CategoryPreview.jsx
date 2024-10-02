import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import './CategoryPreview.css';
import CardContainer from '../CardContainer/CardContainer';

const CategoryPreview = ({recipes, categories}) => {
    
    const getRecipesByCategory = (category) => {
        return recipes.filter(recipe => recipe.categories.includes(category));
    }

    // const addRecipeCards = (recipesOfCategory) => {
    //     return recipesOfCategory.slice(0,4).map(recipe => {
    //         return (
    //             <RecipeCard
    //             key={recipe._id}
    //             id={recipe._id}
    //             image={recipe.imageUrl}
    //             name={recipe.title}
    //             description={recipe.description}
    //             rating={recipe.avgRating}
    //             categories={recipe.categories}
    //             timeInMins={recipe.timeInMins}
    //             />
    //         )
    //     });
    // }

    // console.log('Recipes:', recipes);
    // console.log('Categories:', categories);

    return (
        <div className='category-wrapper'>
            {categories.map((category, index) => {
                const recipesOfCategory = getRecipesByCategory(category.name);
                return (
                    <div key={index} className='category-section'>
                        <h2>{category.name}</h2>
                        {/* <div className='recipe-cards'>
                            {addRecipeCards(recipesOfCategory)}
                        </div> */}
                        <CardContainer recipes={recipesOfCategory.slice(0,4)}/>
                    </div>
                );
            })}
        </div>
    )
}

export default CategoryPreview;