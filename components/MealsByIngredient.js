/* eslint-disable no-unused-vars */
import React from "react";
import Fridge from "../components/Fridge";

export default function MealsByIngredient({ mealSuggestions }) {
  return (
    <main>
      <section className="meals">
        {mealSuggestions.map((meal) => {
          return <Fridge key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
