import React from 'react'
import CardContainer from '../CardContainer/CardContainer';
import { Link } from "react-router-dom";
import RecipeCarousel from '../RecipeCarousel/RecipeCarousel';
import { scrollToTop } from '../../util';

const CategoryPreview = ({recipes, categories}) => {

    const mainCategories = categories.slice(0,3);

    const getRecipesByCategory = (category) => {
        return recipes.filter(recipe => recipe.categories.includes(category));
    }

    return (
        <div className='page__content-wrapper'>
            {mainCategories.map((category, index) => {
                const recipesOfCategory = getRecipesByCategory(category.name);
                return (
                    <div key={index} className='page__content-section'>
                        <div className='section-header'>
                            <Link to={`/categories/${category.name}`} onClick={scrollToTop}><h2>{category.name}</h2></Link>
                            <Link to={`/categories/${category.name}`} onClick={scrollToTop}><button>Se mer</button></Link>
                        </div>
                        <div className='carousel-container'>
                            <RecipeCarousel recipes = {recipesOfCategory}/>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default CategoryPreview;