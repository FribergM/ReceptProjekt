import React from 'react';
import './RecipeCard.css';
import { Link } from "react-router-dom";
import { scrollToTop } from '../../util';
import StarRating from '../Rating/StarRating';

const RecipeCard = ({ id, image, name, description, rating, categories, timeInMins }) => {

  return (
    <Link to={`/recipe/${id}`} onClick={scrollToTop}>
      <div className="recipe-card">
        <img src={`/images/${image}`} alt={name} className="recipe-image" />
        <div className="recipe-info">
          <h2 className="recipe-name">{name}</h2>
          <p className="recipe-description">{description}</p>
          <div className="recipe-meta">
            <div className="recipe-rating">
              <StarRating rating={rating}/>
            </div>
            <div className="recipe-time">
              <img src="/icons/TimeIcon.svg" alt="Time Icon" className="recipe-icon" />
              <p>{timeInMins} min</p>
            </div>
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
    </Link>
  );
};

export default RecipeCard;