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
          <h2>Sökresultat</h2>
             <h4>
              {isNum?(<>
              Sökord: {query}
              <br />
              Visar alla recept vars tillagningstid är {query} min
              </>)
              :(<>
               {
                categoriesMatchQuery.length>0?
                (<>
                Sökord: {query}
                <br />
                Visar alla recept under {query}
                </>)
                :(<>
                Sökord: {query}
                <br />
                Visar alla recept vars namn innehåller {query}
                </>)
               }
              </>)}
             </h4>
             {filterRecipes.length > 0
             ?<CardContainer recipes = {filterRecipes}/>
             :"Tyvärr har vi inget matchande recept."}

        </div>
      </div>
    )
}

export default SearchResult;
 