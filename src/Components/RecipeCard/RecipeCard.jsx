import React from 'react';
import './RecipeCard.css';
import { Link } from "react-router-dom";
import { scrollToTop } from '../../util';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const RecipeCard = ({ id, image, name, description, rating, categories, timeInMins }) => {
  let roundedRating = rating == null ? 0 : Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={index < roundedRating ? faStarSolid : faStarRegular}
      className={index < roundedRating ? "star filled" : "star"}
    />
  ));
  return (
    <Link to={`/recipe/${id}`} onClick={scrollToTop}>
      <div className="recipe-card">
        <img src={`/images/${image}`} alt={name} className="recipe-image" />
        <div className="recipe-info">
          <h2 className="recipe-name">{name}</h2>
          <p className="recipe-description">{description}</p>
          <div className="recipe-meta">
            <div className="recipe-rating">
              {stars}
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
    </Link>
  );
};

export default RecipeCard;