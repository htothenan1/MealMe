/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import MealList from "../components/MealList";
import Link from "next/link";

function Meals() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=739bf6d5d9104c6c8da154be58a25a1e&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div className="Meals">
      <h1>Daily Meal Plan by Calorie</h1>
      <p>Choose how many combined calories for today's meals:</p>
      <section className="controls">
        <input type="number" placeholder="Calories" onChange={handleChange} />
      </section>
      <button onClick={getMealData}>Get Suggested Meal Plan</button>
      {mealData && <MealList mealData={mealData} />}
      <Link href="/">
        <a
          style={{
            display: "flex",
            textAlign: "center",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Back Home
        </a>
      </Link>
    </div>
  );
}

export default Meals;

// https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=5&apiKey=739bf6d5d9104c6c8da154be58a25a1e
