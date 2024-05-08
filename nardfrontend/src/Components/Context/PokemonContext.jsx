import React, { createContext, useState } from "react";

const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [selectedMoves, setSelectedMoves] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [randomMoves, setRandomMoves] = useState([]);
  const [createdBattle, setCreatedBattle] = useState("");
  const [open, setOpen] = useState(false);

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
        createdBattle,
        setCreatedBattle,
        open,
        setOpen,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonContextProvider };
