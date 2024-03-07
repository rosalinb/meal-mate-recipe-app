import React, { useState, useEffect } from "react";
import "./Calories.css";

interface MealProps {
  meal: {
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
  };
}

export default function Meal({ meal }: MealProps) {
  const ApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${ApiKey}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article className="meal-cointainer-card">
      <h3>{meal.title}</h3>
      <img src={imageUrl} alt="" />
      <ul>
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number Of Servings: {meal.servings}</li>
      </ul>

      <a className="recipe-link" href={meal.sourceUrl} target="blank">
        View Full Recipe
      </a>
    </article>
  );
}
