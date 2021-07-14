import React, { useState, useEffect } from "react"

export default function Meal({ meal }) {
	const [imageUrl, setImagerl] = useState("")
	const [sourceUrl, setSourceUrl] = useState("")
	const [minutes, setMinutes] = useState(null)
	const [servings, setServings] = useState(null)

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=739bf6d5d9104c6c8da154be58a25a1e&includeNutrition=false`
		)
			.then((response) => response.json())
			.then((data) => {
				setImagerl(data.image)
				setSourceUrl(data.sourceUrl)
				setMinutes(data.readyInMinutes)
				setServings(data.servings)
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
				<li>Preparation time: {minutes} minutes</li>
				<li>Number of servings: {servings}</li>
			</ul>
			<a href={sourceUrl} target="_blank">
				Go to Recipe
			</a>
		</article>
	)
}
