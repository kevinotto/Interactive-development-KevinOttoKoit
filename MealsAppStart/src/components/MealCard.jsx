import React from 'react'

const MealCard = () => {
  return (
    <div className="meal">
      <div className="meal-header">
        {isRandom && <span className="random">Meal of the Day</span>}
        <img src={mealData.strMealThumb} akt=""/>
      </div>
      <div className="meal-body">
        <h3>{mealData.strMeal}</h3>
        <button className='fav-btn'>
          <i className='fas fa-heart'></i>
        </button>
      </div>
    </div>
  )
}

export default MealCard
