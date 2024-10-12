// import React from 'react';
// import CardContainer from '../CardContainer/CardContainer';


//  function SearchResult ({recipes, query}) {


//     const filterRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase()) || recipe.timeInMins == Number(query))

//    return (
//      <div className="searched-recipes category-wrapper">

//        <div className='category-section'>
//          <h2>Result</h2>
//          <h3>
//            {!isNaN(query)
//              ? <>Search: {query}<br />Visa alla menyer med denna tillagningstid.</>
//              : <>Search: {query}<br />Visa alla menyer som sina namn innehåller dessa bokstäver.</>
//            }
//          </h3>

//          {filterRecipes.length > 0 ? <CardContainer recipes={filterRecipes} /> : "No recipe founded."}
//        </div>
//      </div>
//    )
//  }

//  export default SearchResult;

// function SearchResult ({recipes, query}){
//   const lowercaseQuery = query.toLowerCase();
//     const categoryMatchRecipes = recipes.filter(recipes => recipes.categories.some(category => category.toLowerCase() == lowercaseQuery))

// }


// import React from 'react';
// import CardContainer from '../CardContainer/CardContainer';

// function SearchResult({ recipes, query }) {
//   const lowercaseQuery = query.toLowerCase();

//   const categoryMatchRecipes = recipes.filter(recipe => 
//     recipe.categories.some(category => category.toLowerCase() === lowercaseQuery)
//   );

//   const titleMatchRecipes = recipes.filter(recipe =>
//     recipe.title.toLowerCase().includes(lowercaseQuery)
//   );

//   const tidMatchRecipes = recipes.filter(recipe => recipe.timeInMins = Number(query))

//   // const filterRecipes = categoryMatchRecipes.length > 0 ? categoryMatchRecipes : titleMatchRecipes;

//   const filterRecipes = categoryMatchRecipes.length > 0 ? categoryMatchRecipes : titleMatchRecipes;


//   return (
//     <div className="searched-recipes category-wrapper">
//       <div className="category-section">
//         <h2>Result</h2>
//         <h3>
//           {categoryMatchRecipes.length > 0 ? (
//             <>
//               Search: {query}
//               <br />
//               Visa alla menyer under kategorin "{query}".
//             </>
//           ) : (
//             <>
//               Search: {query}
//               <br />
//               Visa alla menyer som sina namn innehåller dessa bokstäver.
//             </>
//           )}
//         </h3>

//         {filterRecipes.length > 0 ? (
//           <CardContainer recipes={filterRecipes} />
//         ) : (
//           "No recipe found."
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchResult;

import React from "react";
import CardContainer from "../CardContainer/CardContainer";

function SearchResult ({recipes, query})  {
  const lowcaseQuery = query.toLowerCase()
   
  // const normalizeQuery = (query) =>{
  //   return query.toLowerCase()
  //   .replace(/ä/g,'a')
  //   .replace(/ö/g,'o')
  //   .replace(/å/g,'a');
  // } 

  const isNum = !isNaN(query);

  // const normalizeCategory = recipes.filter(recipe => recipe.categories.map(normalizeCategory(category)))

  const timeMatchRecipes = recipes.filter(recipe => recipe.timeInMins == Number(lowcaseQuery));

  const categoriesMatchQuery = recipes.filter(recipe => recipe.categories.some(category => category.toLowerCase() === lowcaseQuery));

  // const categoriesMatchQuery = normalizeCategory.some(category =>category.toLowerCase() === lowcaseQuery);

  const nameMatchRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(lowcaseQuery))

  const filterRecipes = isNum
  ?timeMatchRecipes
  :categoriesMatchQuery.length>0
    ?categoriesMatchQuery
    :nameMatchRecipes;

    return (
      <div className="searched-recipes, recipes-wrapper">
        <div className ="category-section">
          <h2>Result</h2>
             <h4>
              {isNum?(<>
              Search: {query}
              <br />
              Visa alla menyer med denna tillagningstid
              </>)
              :(<>
               {
                categoriesMatchQuery.length>0?
                (<>
                Search: {query}
                <br />
                Visa alla menyer under dessa categori
                </>)
                :(<>
                Search: {query}
                <br />
                Visa alla menyer som sina namn innehåller dessa bokstäver
                </>)
               }
              </>)}
             </h4>
             {filterRecipes.length > 0
             ?<CardContainer recipes = {filterRecipes}/>
             :"Den här menyn kommer att läggas till snart"}

        </div>
      </div>
    )
}

export default SearchResult;
 