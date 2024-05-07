import React from "react";

function PlayerBattleSprite({ pokemonList, selectedPokemon }) {
  // Check if pokemonList is empty or undefined
  if (!pokemonList || pokemonList.length === 0) {
    return (
      <div className="player-one-pokemon-sprite" id="P1S">
        {/* <p>Error: Pokemon list is empty or undefined.</p> */}
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
    <div className="player-one-pokemon-sprite" id="P1S">
      {spriteUrl ? (
        <img
          src={spriteUrl}
          alt="Player One Pokemon Sprite"
          style={{ width: "300px", height: "300px" }}
        />
      ) : (
        <p>.</p>
      )}
    </div>
  );
}

export default PlayerBattleSprite;
