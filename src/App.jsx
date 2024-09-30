// import { useState, useEffect } from 'react'
// import './App.css'
// import RecipeCard from './Components/RecipeCard/RecipeCard';

// function App() {
  // const [recipes, setRecipes] = useState([])

  // const fetchRecipeData = () => {
  //   fetch(import.meta.env.VITE_API_URL)
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setRecipes(data)
  //     })
  // }

//   useEffect(() => {
//     fetchRecipeData()
//   }, [])

//   return (
//     <>
//       <div>
//         {recipes.map((recipe) => (
//           <RecipeCard
//             key={recipe._id}
//             image={recipe.imageUrl}
//             name={recipe.title}
//             description={recipe.description}
//             rating={recipe.avgRating}
//             categories={recipe.categories}
//             timeInMins={recipe.timeInMins}
//           />
//         ))}
//       </div>
//     </>
//   )
// }


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./Components/pages/StartPage";
import CategoryPage from "./Components/pages/CategoriPage";
import RecipesPage from "./Components/pages/RecipesPage";
import { fetchData } from "./api.js";




function App() {

  // const [recipes, setRecipes] = useState([])
  // const [categories, setCategories] = useState([])

  // const fetchRecipeData = () => {
  //   fetch(import.meta.env.VITE_API_URL)
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setRecipes(data)
  //     })
  // }

  // const fetchCategoryData = () => {
  //   fetch(import.meta.env.VITE_CATEGORY_URL)
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setCategories(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchRecipeData();
  //   fetchCategoryData();
  // }, [])

  const [recipes, setRecipes] = useState([])
  const [categories, setCategories] = useState([])

  const fetchAllData = async () =>{
    const fetchedRecipes = await fetchData(import.meta.env.VITE_API_URL)
    const fetchedCategories = await fetchData(import.meta.env.VITE_CATEGORY_URL)
    setRecipes(fetchedRecipes)
    setCategories(fetchedCategories)
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  return (
    
     <Router>
      <Routes>
        <Route path="/" element ={<StartPage recipes={recipes} categories={categories}/>} />
        <Route path="/category/:categoryId" element ={<CategoryPage />} />
        <Route path="/recipe/:recipeId" element ={<RecipesPage />} />
      </Routes>
     </Router>
    
  )
}

export default App
