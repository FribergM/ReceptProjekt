import { useState, useEffect } from 'react'
import './App.css'
import RecipeCard from './Components/RecipeCard/RecipeCard';

function App() {
  const [recipes, setRecipes] = useState([])

  const fetchRecipeData = () => {
    fetch(import.meta.env.VITE_API_URL)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setRecipes(data)
      })
  }

  useEffect(() => {
    fetchRecipeData()
  }, [])

  return (
    <>
      <div>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            image={recipe.imageUrl}
            name={recipe.title}
            description={recipe.description}
            rating={recipe.avgRating}
            categories={recipe.categories}
            timeInMins={recipe.timeInMins}
          />
        ))}
      </div>
    </>
  )
}

export default App
