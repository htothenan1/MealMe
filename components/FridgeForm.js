import React, { useState } from "react"

function FridgeForm(props) {
	const [input, setInput] = useState("")

	const handleChange = (e) => {
		setInput(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		props.onSubmit(
			input
        )

		setInput("")
	}

	return (
		<form className="fridge-form" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add an Item"
				value={input}
				name="text"
				className="fridge-input"
				onChange={handleChange}
			/>
			<button className="fridge-button">Add Item</button>
		</form>
	)
}

export default FridgeForm
