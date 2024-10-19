import React from "react";
import CardContainer from "../CardContainer/CardContainer";

function SearchResult ({recipes, query})  {
  const lowcaseQuery = query.toLowerCase()

  const isNum = !isNaN(query);


  const timeMatchRecipes = recipes.filter(recipe => recipe.timeInMins == Number(lowcaseQuery));

  const categoriesMatchQuery = recipes.filter(recipe => recipe.categories.some(category => category.toLowerCase() === lowcaseQuery));


  const nameMatchRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(lowcaseQuery))

  const filterRecipes = isNum
  ?timeMatchRecipes
  :categoriesMatchQuery.length>0
    ?categoriesMatchQuery
    :nameMatchRecipes;

    return (
      <div className="searched-recipes, page__content-wrapper">
        <div className ="page__content-section">
          <h2>Result</h2>
             <h4>
              {isNum?(<>
              Search: {query}
              <br />
              Visa alla menyer som tillagningstid är {query}min
              </>)
              :(<>
               {
                categoriesMatchQuery.length>0?
                (<>
                Search: {query}
                <br />
                Visa alla menyer under {query}
                </>)
                :(<>
                Search: {query}
                <br />
                Visa alla menyer som sina namn innehåller {query}
                </>)
               }
              </>)}
             </h4>
             {filterRecipes.length > 0
             ?<CardContainer recipes = {filterRecipes}/>
             :"Tyvärr har vi inte den här menyn."}

        </div>
      </div>
    )
}

export default SearchResult;
 