import React from "react"
import FridgeForm from "./FridgeForm"

function Item({ items }) {
	return items.map((item, index) => (
		<div key={index} style={{ textAlign: "center" }}>
			<div key={item.id}>{item}</div>
		</div>
	))
}

export default Item
