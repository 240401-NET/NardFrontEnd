import React, { useState } from "react";

function RandomizedOpponentButton({ pokemonList, onSelectOpponent }) {
  const [randomPokemon, setRandomPokemon] = useState(null);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    const selectedPokemon = pokemonList[randomIndex];
    setRandomPokemon(selectedPokemon);
    onSelectOpponent(selectedPokemon);
  };

  return (
    <div
      className="button"
      style={{ display: "flex", justifyContent: "right" }}
      id="ROButt"
    >
      <button onClick={handleClick}>Find an Opponent</button>
      {randomPokemon && (
        <p>
          Selected opponent: {randomPokemon.name}, {randomPokemon.image}
        </p>
      )}
    </div>
  );
}

export default RandomizedOpponentButton;
