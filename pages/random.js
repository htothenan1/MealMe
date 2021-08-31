import React, { useState } from "react"
import Link from "next/link"

function Random() {
	const [meal, setMealData] = useState(null)

	function getRandomMeal() {
		fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=739bf6d5d9104c6c8da154be58a25a1e`
		)
			.then((response) => response.json())
			.then((data) => {
				setMealData(data)
				console.log(data)
			})
			.catch(() => {
				console.log("error")
			})
	}

	return (
		<div className="Meals">
			<h1>Get Random Meal</h1>
			<button onClick={getRandomMeal}>MealMe!</button>
			{meal ? (
				<article style={{ display: "flex", margin: "auto" }}>
					<h1>{meal.recipes[0].title}</h1>
					<img src={meal.recipes[0].image} alt="recipe" />
					<ul className="instructions">
						<li>Preparation time: {meal.recipes[0].readyInMinutes} minutes</li>
						<li>Number of servings: {meal.recipes[0].servings}</li>
					</ul>

					<a href={meal.recipes[0].sourceUrl} target="_blank">
						Go to Recipe
					</a>
				</article>
			) : (
				<div></div>
			)}
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
	)
}

export default Random
