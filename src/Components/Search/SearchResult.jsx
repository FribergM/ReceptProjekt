import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import './SearchResult.css';

function SearchResult({ recipes, query }) {
  const lowcaseQuery = query.toLowerCase();
  const isNum = !isNaN(query);

  const timeMatchRecipes = recipes.filter(recipe => recipe.timeInMins == Number(lowcaseQuery));
  const categoriesMatchQuery = recipes.filter(recipe =>
    recipe.categories.some(category => category.toLowerCase() === lowcaseQuery)
  );
  const nameMatchRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(lowcaseQuery)
  );
  const ingredientMatchRecipes = recipes.filter(recipe =>
    recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(lowcaseQuery))
  );
  // const combinedMatchedRecipes = [...new Set([...nameMatchRecipes, ...ingredientMatchRecipes])];

  let filterRecipes;
  let resultMessage = "Tyvärr har vi inget matchande recept."; 

  if (isNum) {
    filterRecipes = timeMatchRecipes;
    resultMessage = `Visar alla recept vars tillagningstid är ${query} min`;
  } else if (categoriesMatchQuery.length > 0) {
    filterRecipes = categoriesMatchQuery;
    resultMessage = `Visar alla recept under ${query}`;
  } else if (nameMatchRecipes.length > 0 && ingredientMatchRecipes.length>0) {
    filterRecipes = [...new Set([...nameMatchRecipes, ...ingredientMatchRecipes])];
    resultMessage = `Visar alla recept vars namn eller ingredienser innehåller ${query}`;
  } else if (nameMatchRecipes.length > 0) {
    filterRecipes = nameMatchRecipes;
    resultMessage = `Visar alla recept vars namn innehåller ${query}`;
  } else if (ingredientMatchRecipes.length > 0) {
    filterRecipes = ingredientMatchRecipes;
    resultMessage = `Visar alla recept har ingredient ${query}`;
  }


  return (
    <div className="searched-recipes page__content-wrapper">
      <div className="page__content-section">
        <div className="section-header">
          <h2>Sökresultat</h2>
        </div>
        <h4 className="search-result-text">
          Sökord: {query}
          <br />
          {resultMessage}
        </h4>
        {filterRecipes && filterRecipes.length > 0 && (
          <>
            <h4 className="search-result-text">Visar alla matchande recept:</h4>
            <CardContainer recipes={filterRecipes} />
          </>
        )}
      </div>
    </div>
  );
}

export default SearchResult;
 