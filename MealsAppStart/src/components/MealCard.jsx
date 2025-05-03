import React from "react";

const MealCard = ({ meal, addToFavorites }) => {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
      <button onClick={() => addToFavorites(meal)}>Add to Favorites</button>
    </div>
  );
};

export default MealCard;