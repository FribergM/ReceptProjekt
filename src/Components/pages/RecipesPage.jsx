import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../Navbar/Navbar";
import Rating from "../Rating/Rating";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import "./RecipesPage.css";

function RecipesPage({ recipes, categories }) {
  const { recipeId } = useParams();
  if (!recipes || recipes.length === 0) {
    return <p>Laddar recept...</p>;
  }
  const recipe = recipes.find((recipe) => recipe._id === recipeId);
  return (
    <div>
      <Header />
      <NavBar recipes={recipes} categories={categories} />
      <div className="recipe-page-container">
        <RecipeDetails
          image={recipe.imageUrl}
          title={recipe.title}
          description={recipe.description}
          time={recipe.timeInMins}
          rating={recipe.avgRating}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        ></RecipeDetails>
        <Rating id={recipeId}></Rating>
      </div>

      <Footer />
    </div>
  );
}

export default RecipesPage;
