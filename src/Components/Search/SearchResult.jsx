import React from 'react';
import CardContainer from '../CardContainer/CardContainer';


 function SearchResult ({recipes, query}) {

   //  const filterRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase()))

    const filterRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase()) || recipe.timeInMins == Number(query))
 

 return(
    <div className = "searched-recipes category-wrapper">
        {/* <h2> Search: {query} </h2> */}
        {/* <h2>
  { !isNaN(query) 
      ? `Search: ${query}<br /> Visa alla menyer med denna tillagningstid. `  
      : `Search: ${query}<br />>Visa alla menyer som sina namn innehåller dessa bokstäver.`            
  }
</h2> */}

  <div className='category-section'>
  <h2>Result</h2>
<h3>
  { !isNaN(query) 
      ? <>Search: {query}<br />Visa alla menyer med denna tillagningstid.</>  
      : <>Search: {query}<br />Visa alla menyer som sina namn innehåller dessa bokstäver.</>            
  }
</h3>

        {/* <CardContainer recipes ={filterRecipes} /> */}
        {filterRecipes.length>0 ? <CardContainer recipes ={filterRecipes} /> : "No recipe founded."}
        </div>
    </div>
 )
 }

 export default SearchResult;