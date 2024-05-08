import React from "react";

function PlayersSpritesDisplay({ pokemonList, selectedPokemon }) {
  // Check if pokemonList is empty or undefined
  if (!pokemonList || pokemonList.length === 0) {
    return (
      <div>
        <p>Error: Pokemon list is empty or undefined.</p>
      </div>
    );
  }
  // Find the selected Pokémon in the pokemonList
  const selectedPokemonData = pokemonList.find(
    (pokemon) => pokemon.name === selectedPokemon
  );

  // Get the sprite URL of the selected Pokémon
  const spriteUrl = selectedPokemonData ? selectedPokemonData.sprite : null;
  return (
    <div className="image-container, flipped-horizontal" id="P1S">
      {spriteUrl ? (
        <img
          src={spriteUrl}
          alt="Player One Pokemon Sprite"
          className="flipped-horizontal"
          style={{
            transform: "scale(3.5)" /* Magnify the image by scaling it */,
            transformOrigin: "0 0" /* Set the origin of the transformation */,
            transition: "transform 0.3s ease" /* Add smooth transition */,
          }}
        />
      ) : (
        <p>.</p>
      )}
    </div>
  );
}

export default PlayersSpritesDisplay;
