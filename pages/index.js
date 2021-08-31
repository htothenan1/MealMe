import React, { useState } from "react"
import Head from "next/head"
import Link from "next/link"

const Index = () => {
	const [joke, setJoke] = useState("")
	const [trivia, setTrivia] = useState("")

	const getTrivia = () => {
		fetch(
			"https://api.spoonacular.com/food/trivia/random?apiKey=739bf6d5d9104c6c8da154be58a25a1e"
		)
			.then((response) => response.json())
			.then((data) => {
				setTrivia(data)
			})
			.catch(() => {
				console.log("error")
			})
	}

	const getJoke = () => {
		fetch(
			"https://api.spoonacular.com/food/jokes/random?apiKey=739bf6d5d9104c6c8da154be58a25a1e"
		)
			.then((response) => response.json())
			.then((data) => {
				setJoke(data)
			})
			.catch(() => {
				console.log("error")
			})
	}

	return (
		<>
			<Head>
				<title>👨‍🍳 MealMe 👩‍🍳</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>👨‍🍳 MealMe 👩‍🍳</h1>

				<h2 style={{ marginBottom: "10px" }}>Search Recipes by:</h2>
				<Link href="/calories">
					<a>Calories</a>
				</Link>
				<Link href="/ingredient">
					<a>Single Ingredient</a>
				</Link>
				<Link href="/fridge">
					<a>What's in your Fridge</a>
				</Link>
				<Link href="/random">
					<a>Random Recipe</a>
				</Link>
				<h2 style={{ marginBottom: "10px" }}>Other Fun Stuff:</h2>
				<Link href="/convert">
					<a>Unit Converter</a>
				</Link>
				<Link href="/wine">
					<a>Wine Pairing</a>
				</Link>
				<button onClick={getJoke} style={{ marginBottom: "10px" }}>
					Random Food Joke
				</button>
				{joke ? <p>😂 {joke.text} 😂</p> : <p></p>}
				<button onClick={getTrivia}>Random Food Trivia</button>
				{trivia ? <p>🤓 {trivia.text} 🤓</p> : <p></p>}
			</main>
		</>
	)
}

export default Index
