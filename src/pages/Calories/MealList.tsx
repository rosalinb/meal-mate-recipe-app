import React from "react";
import Meal from "./Meal";
import "./Calories.css";

interface MealDataProps {
  mealData: {
    meals: [meal?: any];
    nutrients: {
      calories: number;
      protein: number;
      fat: number;
      carbohydrates: number;
    };
  };
}

export default function MealList({ mealData }: MealDataProps) {
  const nutrients = mealData.nutrients;
  // console.log(mealData)
  return (
    <main>
      <section className="nutients">
        <h2>Nutrients</h2>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Proteins: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
