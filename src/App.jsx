import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/pages/StartPage";
import CategoryPage from "./components/pages/CategoriPage";
import RecipesPage from "./Components/pages/RecipesPage";
import { fetchData } from "./api.js";




function App() {
  const [recipes, setRecipes] = useState([])
  const [categories, setCategories] = useState([])

  const fetchAllData = async () =>{
    const fetchedRecipes = await fetchData(import.meta.env.VITE_API_URL+"/recipes")
    const fetchedCategories = await fetchData(import.meta.env.VITE_API_URL+"/categories")
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
        <Route path="/categories/:category" element ={<CategoryPage recipes={recipes} categories ={categories}/>} />
        <Route path="/recipe/:recipeId" element ={<RecipesPage />} />
      </Routes>
     </Router>
    
  )
}

export default App
