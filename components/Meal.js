import React, { useState, useEffect } from "react"

export default function Meal({ meal }) {
	const [imageUrl, setImagerl] = useState("")

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=739bf6d5d9104c6c8da154be58a25a1e&includeNutrition=false`
		)
			.then((response) => response.json())
			.then((data) => {
				setImagerl(data.image)
			})
			.catch(() => {
				console.log("error")
			})
	}, [meal.id])

	return (
		<article>
			<h1>{meal.title}</h1>
			<img src={imageUrl} alt="recipe" />
			<ul className="instructions">
				<li>Preparation time: {meal.readyInMinutes} minutes</li>
				<li>Number of servings: {meal.servings}</li>
			</ul>

			<a href={meal.sourceUrl} target="_blank">
				Go to Recipe
			</a>
		</article>
	)
}
