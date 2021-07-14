import React, { useState } from "react"
import FridgeForm from "./FridgeForm"
import Item from "./Item"
import MealsByIngredient from "../components/MealsByIngredient"

function FridgeList() {
	const [items, setItems] = useState([])
	const [mealSuggestion, setMealSuggestions] = useState(null)
	const [fridge, setFridge] = useState([])

	const addItem = (item) => {
		if (!item || /^\s*$/.test(item.text)) {
			return
		}
		const newItems = [item, ...items]

		setItems(newItems)
		console.log(item, ...items)
		console.log(item.text)
		console.log(...items)
		console.log(newItems)
		setFridge(newItems)
	}

	const clearFridge = (id) => {
		const clearedFridge = []
		setItems(clearedFridge)
		console.log(clearedFridge)
	}

	function getMealSuggestions() {
		fetch(
			`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${fridge.join(
				",+"
			)}&number=3&apiKey=739bf6d5d9104c6c8da154be58a25a1e`
		)
			.then((response) => response.json())
			.then((data) => {
				setMealSuggestions(data)
				console.log(data)
			})
			.catch(() => {
				console.log("error")
			})
	}

	return (
		<div>
			<h2>What's in your fridge?</h2>
			<FridgeForm onSubmit={addItem} />
			<Item items={items} />
			<button onClick={clearFridge} style={{ marginTop: "10px" }}>
				Clear Fridge
			</button>
			<section className="controls"></section>
			<button onClick={getMealSuggestions}>Get Suggested Meals</button>
			{mealSuggestion && <MealsByIngredient mealSuggestions={mealSuggestion} />}
		</div>
	)
}

export default FridgeList
