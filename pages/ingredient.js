/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import MealsByIngredient from "../components/MealsByIngredient";
import Link from "next/link";

function MealSuggestion() {
  const [mealSuggestion, setMealSuggestions] = useState(null);
  const [ingredient, setIngredient] = useState(null);

  function handleChange(e) {
    setIngredient(e.target.value);
  }

  function getMealSuggestions() {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=3&apiKey=739bf6d5d9104c6c8da154be58a25a1e`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealSuggestions(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div className="Meals">
      <h1>Meal Suggestions by Ingredient</h1>
      <p>Choose an ingredient you'd like to cook with:</p>
      <section className="controls">
        <input type="name" placeholder="Ingredient" onChange={handleChange} />
      </section>
      <button onClick={getMealSuggestions}>Get Suggested Meals</button>
      {mealSuggestion && <MealsByIngredient mealSuggestions={mealSuggestion} />}
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

export default MealSuggestion;

// https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples&number=5&apiKey=739bf6d5d9104c6c8da154be58a25a1e
