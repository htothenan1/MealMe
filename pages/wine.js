/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Link from "next/link";

function Wine() {
  const [wine, setWineData] = useState(null);
  const [food, setFood] = useState("");

  const handleFood = (e) => {
    console.log(e.target.value);
    setFood(e.target.value);
  };

  function getWine() {
    fetch(
      `https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=739bf6d5d9104c6c8da154be58a25a1e`
    )
      .then((response) => response.json())
      .then((data) => {
        setWineData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div className="Meals">
      <h1>Get Wine Pairing</h1>
      <section className="controls">
        <input
          type="name"
          placeholder="Meal to pair with"
          onChange={handleFood}
        />
      </section>
      <button onClick={getWine} style={{ marginBottom: "10px" }}>
        WineMe!
      </button>
      {wine ? (
        <div>
          <p className="wine">{wine.pairingText}</p>
          <article style={{ display: "flex", margin: "auto" }}>
            <h1>{wine.productMatches[0].title}</h1>
            <img src={wine.productMatches[0].imageUrl} alt="recipe" />
            <ul className="instructions">
              <li>Price: {wine.productMatches[0].price}</li>
            </ul>

            <a href={wine.productMatches[0].link} target="_blank">
              Buy this wine!
            </a>
          </article>
        </div>
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
  );
}

export default Wine;
