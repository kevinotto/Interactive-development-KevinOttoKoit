import React from "react";
import MealCard from "./MealCard";

const MealList = ({ meals, addToFavorites }) => {
  return (
    <div>
      <h2>Meals</h2>
      <div className="meal-list">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} addToFavorites={addToFavorites} />
        ))}
      </div>
    </div>
  );
};

export default MealList;