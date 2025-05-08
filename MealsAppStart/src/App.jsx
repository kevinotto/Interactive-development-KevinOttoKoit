import React, { useState, useEffect } from "react";
import MealList from "./components/MealList";
import RandomMeal from "./components/RandomMeal";
import SearchBar from "./components/Search";
import Favorites from "./components/Favorites";
import './App.css';

const App = () => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favoriteMeals");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("favoriteMeals", JSON.stringify(favorites));
    console.log("Favorites updated:", favorites);
  }, [favorites]);

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setMeals(data.meals || []))
        .catch((error) => console.error("Error fetching meals:", error));
    }
  }, [searchTerm]);

  const addToFavorites = (meal) => {
    if (!favorites.some((fav) => fav.idMeal === meal.idMeal)) {
      const updatedFavorites = [...favorites, meal];
      setFavorites(updatedFavorites);
    }
  };

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <h1>Meal Web App (by Kevin Otto Koit)</h1>
      <RandomMeal />
      <SearchBar setSearchTerm={setSearchTerm} />
      <MealList meals={meals} addToFavorites={addToFavorites} />
      <Favorites favoriteMeals={favorites} removeFromFavorites={removeFromFavorites} />
    </div>
  );
};

export default App;
