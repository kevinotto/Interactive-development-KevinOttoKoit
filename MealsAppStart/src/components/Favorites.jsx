import React from "react";

const Favorites = ({ favoriteMeals, removeFromFavorites }) => {
  return (
    <div className="favorites-section">
      <h2>Favorites</h2>
      <ul className="favorites">
        {favoriteMeals.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <span>{meal.strMeal}</span>
            <button onClick={() => removeFromFavorites(meal.idMeal)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;