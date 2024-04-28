import React from "react";

function PlayersSpritesDisplay({ pokemonSpriteUrl }) {
  return (
    <div className="player-one-pokemon-sprite">
      <img src={"pokemonSpriteUrl"} alt="Player One Pokemon Sprite" />
      {/* change this */}
    </div>
  );
}

export default PlayersSpritesDisplay;
// import React from "react";
// import OpponentsSpritesDisplay from "./OpponentsSpritesDisplay";

// function SomeParentComponent() {
//   // Assuming you have the URL of the opponent's Pokémon sprite stored in a variable
//   const opponentPokemonSpriteUrl = "https://example.com/opponent-pokemon.png";

//   return (
//     <div>
//       {/* Render the OpponentsSpritesDisplay component and pass the URL as a prop */}
//       <OpponentsSpritesDisplay pokemonSpriteUrl={opponentPokemonSpriteUrl} />
//     </div>
//   );
// }

// export default SomeParentComponent;
