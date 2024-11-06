//Trello id:16
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }) => {
    const roundedRating = rating == null ? null : Math.round(rating * 10) / 10;
  
    return (
      <div className="star-rating">
        {Array.from({ length: 5 }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={index < roundedRating ? faStarSolid : faStarRegular}
            className={index < roundedRating ? "star filled" : "star"}
          />
        ))}
      </div>
    );
  };
  
  export default StarRating;