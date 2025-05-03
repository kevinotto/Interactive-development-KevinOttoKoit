import React, { useState, useEffect } from "react";

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]))
      .catch((error) => console.error("Error fetching random meal:", error));
  }, []);

  return (
    <div>
      <h2>Meal of the Day</h2>
      {meal && (
        <div>
          <h3>{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
      )}
    </div>
  );
};

export default RandomMeal;