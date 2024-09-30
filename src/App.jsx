import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./Components/pages/StartPage";
import CategoryPage from "./Components/pages/CategoriPage";
import RecipesPage from "./Components/pages/RecipesPage";
import { fetchData } from "./api.js";




function App() {
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
        <Route path="/category/:category" element ={<CategoryPage />} />
        <Route path="/recipe/:recipeId" element ={<RecipesPage />} />
      </Routes>
     </Router>
    
  )
}

export default App
