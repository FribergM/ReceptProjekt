import React from "react";
import {useParams} from "react-router-dom";
import CardContainer from '../CardContainer/CardContainer';

function CategoriPage({recipes}) {
    //console.log("recipes,", recipes)
    const {category} = useParams();
    //console.log("current from URL:", category);
    //console.log("recipes:", recipes)
    
    const filteredRecipes = recipes.filter(recipe => recipe.categories.includes(category));
    //console.log("filted recipes:",filteredRecipes)
    //console.log("categories:", recipes.categories)

    return (
         <div>
            <h1>{category} Menus</h1>
            <CardContainer recipes ={filteredRecipes} categories={[{name: category}]}/>
        
        </div>)
}

export default CategoriPage;