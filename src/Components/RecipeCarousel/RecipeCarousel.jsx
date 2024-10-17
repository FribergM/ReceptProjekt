import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecipeCarousel.css"
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeCarousel = ({ recipes }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 3,
        }
      },
      
    ]
  };

  return (
    <Slider {...settings}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe._id}
          id={recipe._id}
          image={recipe.imageUrl}
          name={recipe.title}
          description={recipe.description}
          rating={recipe.avgRating}
          categories={recipe.categories}
          timeInMins={recipe.timeInMins}
        />
      ))}
    </Slider>
  );
};

export default RecipeCarousel;
