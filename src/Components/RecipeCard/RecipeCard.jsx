import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ image, name, description, rating, categories, timeInMins }) => {
  let roundedRating = rating == null ? null : Math.round(rating * 10) / 10;
  return (
    <div className="recipe-card">
      <img src={`${import.meta.env.VITE_PUBLIC_URL}/images/${image}`} alt={name} className="recipe-image" />
      <div className="recipe-info">
        <h2 className="recipe-name">{name}</h2>
        <p className="recipe-description">{description}</p>
        <div className="recipe-meta">
          <div className="recipe-rating">
            {roundedRating}
          </div>
          <div className="recipe-time">{timeInMins} min</div>
        </div>
        <div className="recipe-categories">
          {categories.map((category, index) => (
            <span key={index} className="recipe-category">
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;