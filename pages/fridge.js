/* eslint-disable no-unused-vars */
import React from "react";
import FridgeList from "../components/FridgeList";
import Link from "next/link";

function Fridge() {
  return (
    <div className="Meals">
      <h1>Meal Suggestions based on your fridge items</h1>
      <FridgeList />
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

export default Fridge;
