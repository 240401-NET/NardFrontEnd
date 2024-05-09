import React from "react";

function PlayersSpritesDisplay({ pokemonList, selectedPokemon }) {
  if (!pokemonList || pokemonList.length === 0) {
    return (
      <div>
        <p>Error: Pokemon list is empty or undefined.</p>
      </div>
    );
  }
  const selectedPokemonData = pokemonList.find(
    (pokemon) => pokemon.name === selectedPokemon
  );

  const spriteUrl = selectedPokemonData ? selectedPokemonData.sprite : null;
  return (
    <div className="image-container, flipped-horizontal" id="P1S">
      {spriteUrl ? (
        <img
          src={spriteUrl}
          alt="Player One Pokemon Sprite"
          className="flipped-horizontal"
          style={{
            transform: "scale(3.5)",
            transformOrigin: "0 0",
            transition: "transform 0.3s ease",
          }}
        />
      ) : (
        <p>.</p>
      )}
    </div>
  );
}

export default PlayersSpritesDisplay;
