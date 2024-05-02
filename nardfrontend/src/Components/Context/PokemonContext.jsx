import React, { createContext, useState } from "react";

const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [selectedMoves, setSelectedMoves] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [randomMoves, setRandomMoves] = useState([]);

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
        selectedMoves,
        setSelectedMoves,
        randomPokemon,
        setRandomPokemon,
        randomMoves,
        setRandomMoves,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonContextProvider };
