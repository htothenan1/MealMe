import React, { useState } from "react"
import Link from "next/link"

function Convert() {
	const [amount, setAmount] = useState(null)
	const [from, setFrom] = useState("")
	const [to, setTo] = useState("")
	const [ingredient, setIngredient] = useState(null)
	const [statement, setStatement] = useState("")

	const handleFrom = (e) => {
		console.log(e.target.value)
		setFrom(e.target.value)
	}

	const handleTo = (e) => {
		console.log(e.target.value)
		setTo(e.target.value)
	}

	const handleAmount = (e) => {
		console.log(e.target.value)
		setAmount(e.target.value)
	}

	const handleIngredient = (e) => {
		console.log(e.target.value)
		setIngredient(e.target.value)
	}

	function getConversion() {
		fetch(
			`https://api.spoonacular.com/recipes/convert?ingredientName=${ingredient}&sourceAmount=${amount}&sourceUnit=${from}&targetUnit=${to}&apiKey=739bf6d5d9104c6c8da154be58a25a1e`
		)
			.then((response) => response.json())
			.then((data) => {
				setStatement(data)
				console.log(data)
			})
			.catch(() => {
				console.log("error")
			})
	}

	return (
		<div>
			<h1>Unit Converter</h1>
			<div
				style={{
					display: "flex",
					margin: "auto",
					textAlign: "center",
					justifyContent: "center",
				}}
			>
				<span>
					<label htmlFor="from" style={{ marginRight: "10px" }}>
						From
					</label>
					<select
						name="from"
						id="from"
						style={{ marginRight: "50px" }}
						onChange={handleFrom}
					>
						<option value="">Select a unit</option>
						<option value="cups">Cups</option>
						<option value="grams">Grams</option>
						<option value="teaspoons">Teaspoons</option>
						<option value="tablespoons">Tablespoons</option>
						<option value="ounces">Ounces</option>
						<option value="pints">Pints</option>
						<option value="quarts">Quarts</option>
						<option value="gallons">Gallons</option>
						<option value="pounds">Pounds</option>
						<option value="kilograms">Kilograms</option>
						<option value="milliliters">Milliliters</option>
						<option value="liters">Liters</option>
						<option value="deciliters">Deciliters</option>
					</select>
				</span>
				<span>
					<label htmlFor="to" style={{ marginRight: "10px" }}>
						To
					</label>
					<select name="to" id="to" onChange={handleTo}>
						<option value="">Select a unit</option>
						<option value="cups">Cups</option>
						<option value="grams">Grams</option>
						<option value="teaspoons">Teaspoons</option>
						<option value="tablespoons">Tablespoons</option>
						<option value="ounces">Ounces</option>
						<option value="pints">Pints</option>
						<option value="quarts">Quarts</option>
						<option value="gallons">Gallons</option>
						<option value="pounds">Pounds</option>
						<option value="kilograms">Kilograms</option>
						<option value="milliliters">Milliliters</option>
						<option value="liters">Liters</option>
						<option value="deciliters">Deciliters</option>
					</select>
				</span>
			</div>
			<section className="controls">
				<input
					type="number"
					placeholder="Amount to Convert"
					style={{ textAlign: "center" }}
					onChange={handleAmount}
				/>
			</section>
			<section className="controls">
				<input
					type="name"
					placeholder="Ingredient to Convert"
					onChange={handleIngredient}
				/>
			</section>
			<button onClick={getConversion}>Convert!</button>
			<p>{statement.answer}</p>
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

export default Convert
