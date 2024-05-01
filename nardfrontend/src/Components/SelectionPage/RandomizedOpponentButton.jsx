import React, { useState } from "react";
// import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";

function RandomizedOpponentButton({ onSelectOpponent }) {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      // Make the HTTP request to fetch a random Pokémon
      const response = await fetch(
        "http://localhost:5019/Pokemon/getRandomPokemon"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch random Pokémon");
      }
      const data = await response.json();
      setRandomPokemon(data);
      onSelectOpponent(data);
    } catch (error) {
      // Handle errors by setting the error state
      setError("Error");
    }
  };

  return (
    <div
      className="button flexaround"
      // style={{ display: "flex", justifyContent: "right" }}
      // id="ROButt"
    >
      <div>
        <button
          className="flexfull"
          onClick={handleClick}
          // style={{ display: "flex", justifyContent: "right" }}
        >
          Find an Opponent
        </button>
      </div>
      {/* <div>{error && <p>{error}</p>}</div> */}
      {randomPokemon && (
        <div>
          <p>Selected opponent: {randomPokemon.name}</p>
          <img
            src={randomPokemon.sprite}
            alt={randomPokemon.name}
            style={{ width: "200px", height: "200px" }}
            className="flexaround"
          />
          {/* <OpponentsSpritesDisplay pokemonSpriteUrl={randomPokemon.sprite} /> */}
        </div>
      )}
    </div>
  );
}

export default RandomizedOpponentButton;
