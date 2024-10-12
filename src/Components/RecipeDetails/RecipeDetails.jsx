import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = ({
  image,
  title,
  description,
  time, 
  difficulty,
  rating,
  ingredients,
  instructions,
}) => {
  let roundedRating = rating == null ? null : Math.round(rating * 10) / 10;
  return (
    <div className="recipe-details-container">
      <img
        src={`${import.meta.env.VITE_PUBLIC_URL}/images/${image}`}
        alt={title}
        className="recipe-details-image"
      />
      <h1 className="recipe-details-title">{title}</h1>
      <p className="recipe-details-description">{description}</p>
      <div className="recipe-details-time-rating">
        <h2>Tillagningstid: {time} min</h2>
        <h2>Svårighetsgrad: {difficulty}</h2>
        <h2>Betyg: {roundedRating}/5</h2>
      </div>
      <div className="ingredients-instructions-container">
        <div className="recipe-details-ingredients">
          <h2>Ingredienser</h2>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li
                key={index}
              >{`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-details-instructions">
          <h2>Gör så här</h2>
          <ol>
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
