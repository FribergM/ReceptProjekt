import { useState, useEffect } from 'react'
import './App.css'
import RecipeCard from './Components/RecipeCard/RecipeCard';
import CardContainer from './Components/CardContainer/CardContainer';

function App() {
  const [recipes, setRecipes] = useState([])
  const [categories, setCategories] = useState([])

  const fetchRecipeData = () => {
    fetch(import.meta.env.VITE_API_URL)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setRecipes(data)
      })
  }

  const fetchCategoryData = () => {
    fetch(import.meta.env.VITE_API_CATEGORY)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCategories(data)
      })
  }

  useEffect(() => {
    fetchRecipeData();
    fetchCategoryData();
  }, [])

  return (
    <>
    <img className='header-img' alt='Temporary header image' src='https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_223427/cf_259/korvstroganoff_med_ris.jpg'></img>
      <div className='home-page'>
        <CardContainer recipes={recipes} categories={categories}/>
      </div>
    </>
  )
}

export default App
