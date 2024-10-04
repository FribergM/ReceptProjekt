import React from 'react';
import CardContainer from '../CardContainer/CardContainer';

 function SearchResult ({recipes, query}) {
    console.log("SearchResult recipes", recipes)
    const filterRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase()))

    console.log("searchResult", filterRecipes)
 

 return(
    <div className = "searched-recipes">
        <h2> Search: {query} </h2>
        {/* <CardContainer recipes ={filterRecipes} /> */}

        {filterRecipes.length>0 ? <CardContainer recipes ={filterRecipes} /> : "No recipe founded."}
    </div>
 )
 }

 export default SearchResult;