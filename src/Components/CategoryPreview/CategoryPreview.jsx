import React from 'react'
import './CategoryPreview.css';
import CardContainer from '../CardContainer/CardContainer';

const CategoryPreview = ({recipes, categories}) => {

    const getRecipesByCategory = (category) => {
        return recipes.filter(recipe => recipe.categories.includes(category));
    }

    return (
        <div className='category-wrapper'>
            {categories.map((category, index) => {
                const recipesOfCategory = getRecipesByCategory(category.name);
                return (
                    <div key={index} className='category-section'>
                        <h2>{category.name}</h2>
                        <CardContainer recipes={recipesOfCategory.slice(0,4)}/>
                    </div>
                );
            })}
        </div>
    )
}

export default CategoryPreview;