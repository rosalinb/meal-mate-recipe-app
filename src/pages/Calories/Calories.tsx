import React, { useState } from "react";
import MealList from "./MealList";
import { Input, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import "./Calories.css";

export default function Calories() {
  const ApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(null);

  function handleChange(event: any) {
    setCalories(event.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${ApiKey}&timeFrame=day&targetCalories=${calories}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMealData(data);
        // console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <>
      <article className="header-container">
        <section>
          <h2>You Don't Have To Eat Less, You Have To Eat Rigth.</h2>
          <p>
            Find meal ideas and macro nutients details as per your daily calorie
            intake.
          </p>
        </section>
        <section>
          <img
            src="https://c.tenor.com/ihPi3OW8myEAAAAC/low-calorie-food-market.gif"
            alt=""
          />
        </section>
      </article>

      <section className="calories-search-cointainer">
        <h3>
          Enter your daily targeted calories and Generate a meal plan with three
          meals per day.
        </h3>
        <Input
          variant="flushed"
          placeholder="Daily Targeted Calories Intake"
          onChange={handleChange}
        />
        <Button
          className="button"
          rightIcon={<Search2Icon />}
          colorScheme="teal"
          variant="outline"
          onClick={getMealData}
          mt="20px"
        >
          Generate Meal Ideas
        </Button>
      </section>

      {/* <button onClick={getMealData}>Get Daily meal plan</button> */}

      {mealData && <MealList mealData={mealData} />}
    </>
  );
}
